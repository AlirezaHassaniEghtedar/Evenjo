import type { EventResponseDto } from "../dto/response/event.dto.ts";

export async function fetchEventsApi(): Promise<EventResponseDto[]> {
  const response = await fetch(
    `${import.meta.env.VITE_API_BASE_URL}/services/`,
  );

  return await response.json();
}
