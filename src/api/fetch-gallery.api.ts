import type { GalleryItemResponseDto } from "../dto/response/gallery.dto.ts";

export async function fetchGalleryItemsApi(): Promise<
  GalleryItemResponseDto[]
> {
  const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/gallery/`);

  return await response.json();
}
