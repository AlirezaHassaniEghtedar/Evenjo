import { type ReactNode } from "react";

import { useParams } from "react-router";

import useEventQuery from "../../queries/use-event.query.ts";

import Loading from "../../components/Loading/Loading.tsx";

import { formatDate } from "../../utils/format-date.util.ts";

import SolarCalendarLinear from "../../icons/SolarCalendarLinear.tsx";
import MingcuteMailSendLine from "../../icons/MingcuteMailSendLine.tsx";
import MingcutePhoneCallLine from "../../icons/MingcutePhoneCallLine.tsx";
import MingcuteLocationLine from "../../icons/MingcuteLocationLine.tsx";

import styles from "./Event.module.css";

export default function Event(): ReactNode {
  const { id } = useParams();

  const { data: event, isPending, isError, error } = useEventQuery(id!);

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

  if (!event) {
    return <div className={styles["no-data"]}>There is no data .</div>;
  }

  return (
    <div className={styles["event"]}>
      <div className={styles["event-section"]}>
        <div className={styles["event-section-background"]}>
          <img src="/public/images/event/singer-photo.png" alt="" />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.writings}>
          <h1>Event : {event.title}</h1>
          <p>Experience unforgettable moments at this special event ✨🎉</p>
        </div>
      </div>

      <div className={styles["about-event"]}>
        <div className={styles.title}>
          <h2>About Event</h2>
          <div className={styles["event-details"]}>
            <span>
              <SolarCalendarLinear />
              {formatDate(event.created_at)}
            </span>
          </div>
        </div>
        <div
          className={styles["about-texts"]}
          dangerouslySetInnerHTML={{ __html: event.description }}
        />
      </div>

      <div className={styles["join-us"]}>
        <div className={styles.title}>
          <h2>Join to enjoy your moments!</h2>
          <span>Where every second becomes a memory</span>
        </div>
        <div className={styles.cards}>
          <div className={styles.card}>
            <div className={styles.icon}>
              <MingcutePhoneCallLine />
            </div>
            <span>+0212222</span>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <MingcuteMailSendLine />
            </div>
            <span>Evenjo.info@yahoo.com</span>
          </div>
          <div className={styles.card}>
            <div className={styles.icon}>
              <MingcuteLocationLine />
            </div>
            <span>Tehran</span>
          </div>
        </div>
      </div>

      <div className={styles.map}>
        <a href="#">
          <img src="/public/images/map-image.png" alt="" />
        </a>
      </div>
    </div>
  );
}
