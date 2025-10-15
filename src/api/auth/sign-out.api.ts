import { clearTokens, clearUser } from "../../utils/auth.util.ts";

import type { ResponseDto } from "../../dto/response/response.dto.ts";

export async function signOutApi(): Promise<ResponseDto> {
  clearTokens();
  clearUser();

  return {
    statusCode: 200,
    message: "Successfully signed out",
  };
}
