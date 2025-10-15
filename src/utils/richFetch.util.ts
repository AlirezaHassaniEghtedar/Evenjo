import type { ResponseDto } from "../dto/response/response.dto.ts";
import {
  getAccessToken,
  getRefreshToken,
  setTokens,
  clearTokens,
} from "./auth.util.ts";

export async function richFetch<TResult = void, TFields = void>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<ResponseDto<TResult, TFields>> {
  const [response, data] = await fetchWithAutoRefreshToken<TResult, TFields>(
    input,
    init,
  );

  if (!response.ok) {
    if (data && typeof data === "object") {
      const validationErrors: string[] = [];

      for (const [, errors] of Object.entries(data)) {
        if (Array.isArray(errors)) {
          validationErrors.push(...errors);
        }
      }

      if (validationErrors.length > 0) {
        throw new Error(validationErrors.join(", "));
      }
    }

    throw new Error(
      data.message || `HTTP ${response.status}: ${response.statusText}`,
    );
  }

  return data;
}

export async function fetchWithAutoRefreshToken<TResult = void, TFields = void>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<[Response, ResponseDto<TResult, TFields>]> {
  const [response, data] = await tryToFetch<TResult, TFields>(input, init);

  if (!response.ok) {
    if (
      response.status === 401 &&
      (data.message === "Unauthorized" || !data.message)
    ) {
      const refreshToken = getRefreshToken();

      if (refreshToken) {
        const [refreshResponse, refreshData] = await tryToFetch<
          { refresh: string; access: string },
          TFields
        >("/token/refresh", {
          method: "POST",
          body: JSON.stringify({ refresh: refreshToken }),
        });

        if (
          refreshResponse.ok &&
          "result" in refreshData &&
          refreshData.result
        ) {
          setTokens(refreshData.result.access, refreshData.result.refresh);
          return await tryToFetch<TResult, TFields>(input, init);
        }
      }

      clearTokens();
    }
  }

  return [response, data];
}

export async function tryToFetch<TResult = void, TFields = void>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<[Response, ResponseDto<TResult, TFields>]> {
  if (!init) {
    init = {};
  }

  const accessToken = getAccessToken();
  const headers: Record<string, string> = {
    "Content-Type": "application/json",
    ...(init.headers as Record<string, string>),
  };

  if (accessToken) {
    headers["Authorization"] = `Bearer ${accessToken}`;
  }

  init = {
    credentials: "include",
    ...init,
    headers,
  };

  const fullUrl = `${import.meta.env.VITE_API_BASE_URL}${input}`;
  console.log("Making request to:", fullUrl);
  console.log("Request init:", init);

  const response = await fetch(fullUrl, init);

  let data: any;

  try {
    data = await response.json();
  } catch (error) {
    console.error("Failed to parse JSON response:", error);
    data = {
      statusCode: response.status,
      message: response.statusText,
      error: "Failed to parse response",
    };
  }

  console.log("Raw response data:", data);
  console.log("Response status:", response.status, response.statusText);

  if (response.ok && !data.statusCode && !data.message) {
    console.log("Wrapping raw data in ResponseDto structure");
    data = {
      statusCode: response.status,
      message: "Success",
      result: data,
    };
  }

  return [response, data];
}
