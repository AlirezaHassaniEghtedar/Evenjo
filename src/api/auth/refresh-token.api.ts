import { richFetch } from "../../utils/richFetch.util.ts";
import { setTokens } from "../../utils/auth.util.ts";

import type { ResponseDto } from "../../dto/response/response.dto.ts";
import type { AuthTokensDto } from "../../dto/response/auth.dto.ts";

export async function refreshTokenApi(
  refreshToken: string,
): Promise<ResponseDto<AuthTokensDto>> {
  const response = await richFetch<AuthTokensDto>("/token/refresh/", {
    method: "POST",
    body: JSON.stringify({ refresh: refreshToken }),
  });

  if ("result" in response && response.result) {
    setTokens(response.result.access, response.result.refresh);
  }

  return response;
}
