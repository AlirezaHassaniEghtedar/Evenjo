import type { FAQResponseDto } from "../dto/response/faq.dto.ts";

export async function fetchFaqsApi(): Promise<FAQResponseDto[]> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/faqs/`);

  return await response.json();
}
