import { richFetch } from "../../utils/richFetch.util.ts";
import { setUser } from "../../utils/auth.util.ts";

import type { ResponseDto } from "../../dto/response/response.dto.ts";
import type { SignUpDto } from "../../dto/request";
import type { SignUpResponseDto } from "../../dto/response/auth.dto.ts";

export async function signUpApi(
  dto: SignUpDto,
): Promise<ResponseDto<SignUpResponseDto>> {
  console.log("Starting signup with data:", dto);

  try {
    const response = await richFetch<SignUpResponseDto>("/register/", {
      method: "POST",
      body: JSON.stringify(dto),
    });

    console.log("Signup response:", response);

    if ("result" in response && response.result) {
      console.log("Setting user data:", response.result);
      setUser(response.result);
    }

    return response;
  } catch (error) {
    console.error("Signup API error:", error);
    throw error;
  }
}
