import type { ResponseDto } from "../../dto/response/response.dto";
import { richFetch } from "../../utils/richFetch.util.ts";
import type { EditProfileRequestDto } from "../../dto/request/edit-profile.request.dto.ts";

export async function editProfileApi(
  dto: EditProfileRequestDto,
): Promise<ResponseDto> {
  return await richFetch("/profile", {
    method: "PATCH",
    body: JSON.stringify(dto),
  });
}
