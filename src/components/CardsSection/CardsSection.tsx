import { type ReactNode } from "react";

import { Link } from "react-router";

import EventCard from "../EventCard/EventCard.tsx";

import useEventsQuery from "../../queries/use-events.query.ts";

import Loading from "../Loading/Loading.tsx";

import styles from "./CardsSection.module.css";

type Props = {
  title: string;
};

export default function CardsSection({ title }: Props): ReactNode {
  const { data: events, isPending, isError, error } = useEventsQuery();

  if (isPending) {
    return <Loading />;
  }

  if (isError) {
    return <>Error: {error ? error.message : "Unexpected error."}</>;
  }

  if (events.length === 0) {
    return <div className={styles["no-data"]}>There is no data .</div>;
  }

  return (
    <div className={styles["cards-section"]}>
      <div className={styles["title-section"]}>
        <h2>{title}</h2>
        <Link to="/events-list">see all</Link>
      </div>
      <ul className={styles["cards"]}>
        {events.slice(0, 4).map((event) => (
          <EventCard event={event} />
        ))}
      </ul>
    </div>
  );
}
