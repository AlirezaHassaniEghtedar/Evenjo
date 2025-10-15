import type { EventResponseDto } from "../dto/response/event.dto.ts";

export async function fetchEventApi(id: string): Promise<EventResponseDto> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/services/${id}/`,
  );

  return await response.json();
}
