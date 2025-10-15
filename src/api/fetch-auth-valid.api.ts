import { type ResponseDto } from "../dto/response/response.dto.ts";
import { richFetch } from "../utils/richFetch.util.ts";

export async function fetchAuthValidApi(): Promise<ResponseDto> {
  return richFetch("/auth/valid");
}
