import type { ReactNode } from "react";

import MingcutePhoneCallLine from "../../icons/MingcutePhoneCallLine.tsx";
import MingcuteMailSendLine from "../../icons/MingcuteMailSendLine.tsx";
import MingcuteLocationLine from "../../icons/MingcuteLocationLine.tsx";

import styles from "./JoinUsSection.module.css";

export default function JoinUsSection(): ReactNode {
  return (
    <div className={styles["join-us-section"]}>
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
  );
}
