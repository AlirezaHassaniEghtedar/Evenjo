import { type ReactNode } from "react";

import { Link } from "react-router";

import { formatDate } from "../../utils/format-date.util.ts";

import { type EventResponseDto } from "../../dto/response/event.dto.ts";

import SolarCalendarLinear from "../../icons/SolarCalendarLinear.tsx";

import styles from "./EventCard.module.css";

type Props = {
  event: EventResponseDto;
};

export default function EventCard({ event }: Props): ReactNode {
  return (
    <li className={styles["event-card"]} key={event.id}>
      <Link to={`/event/${event.id}/`}>
        <img src={event.image} alt="" />
        <div className={styles.writings}>
          <div className={styles.title}>{event.title}</div>
          <span>
            <SolarCalendarLinear />
            {formatDate(event.created_at)}
          </span>
          <p
            className={styles.description}
            dangerouslySetInnerHTML={{ __html: event.description }}
          />
        </div>
      </Link>
    </li>
  );
}
