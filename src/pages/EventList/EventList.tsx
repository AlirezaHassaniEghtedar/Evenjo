import { type ReactNode } from "react";

import useEventsQuery from "../../queries/use-events.query.ts";

import Loading from "../../components/Loading/Loading.tsx";
import EventCard from "../../components/EventCard/EventCard.tsx";

import styles from "./EventList.module.css";

export default function EventList(): ReactNode {
  const { data: eventsList, isPending, isError, error } = useEventsQuery();

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return (
      <div className={styles.error}>
        Error: {error ? error.message : "Unexpected error."}
      </div>
    );
  }

  if (eventsList?.length === 0) {
    return <div className={styles["no-data"]}>There is no data .</div>;
  }

  return (
    <div className={styles["events-list"]}>
      <h1>Events</h1>
      <ul>
        {eventsList.map((event) => (
          <EventCard event={event} />
        ))}
      </ul>
    </div>
  );
}
