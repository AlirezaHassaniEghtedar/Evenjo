import { useQuery } from "@tanstack/react-query";

import { fetchGalleryItemsApi } from "../api/fetch-gallery.api.ts";

export default function useGalleryQuery() {
  return useQuery({
    queryKey: ["gallery"],
    queryFn: fetchGalleryItemsApi,
  });
}
