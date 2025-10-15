import { useQuery } from "@tanstack/react-query";

import { fetchEventApi } from "../api/fetch-event.api.ts";

export default function useEventQuery(id: string) {
  return useQuery({
    queryKey: ["events", id],
    queryFn: () => fetchEventApi(id),
  });
}
