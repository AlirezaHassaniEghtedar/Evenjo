import { richFetch } from "../../utils/richFetch.util.ts";
import { setTokens } from "../../utils/auth.util.ts";

import type { ResponseDto } from "../../dto/response/response.dto.ts";
import type { SignInDto } from "../../dto/request";
import type { SignInResponseDto } from "../../dto/response/auth.dto.ts";

export async function signInApi(
  dto: SignInDto,
): Promise<ResponseDto<SignInResponseDto>> {
  const response = await richFetch<SignInResponseDto>("/login/", {
    method: "POST",
    body: JSON.stringify(dto),
  });

  if ("result" in response && response.result) {
    setTokens(response.result.access, response.result.refresh);
  }

  return response;
}
