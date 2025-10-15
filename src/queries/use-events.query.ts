import { useQuery } from "@tanstack/react-query";

import { fetchEventsApi } from "../api/fetch-events.api.ts";

export default function useEventsQuery() {
  return useQuery({
    queryKey: ["events"],
    queryFn: fetchEventsApi,
    staleTime: Infinity,
  });
}
