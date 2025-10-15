import type { ReactNode } from "react";

import styles from "./WhyChooseUsSection.module.css";

export default function WhyChooseUsSection(): ReactNode {
  return (
    <div className={styles["why-choose-us-section"]}>
      <div className={styles.title}>
        <h2>Your Experience, Our Priority</h2>
        <span>Experience excellence with a team that truly cares</span>
      </div>
      <div className={styles.cards}>
        <div>
          <img src="/public/images/contact-us/refundable-tickets.png" alt="" />
          <div className={styles.writings}>
            <div className={styles["card-title"]}>
              Your Ticket is on the Way!
            </div>
            <p className={styles["card-description"]}>
              You can pay a ticket in 2 portions throughout a fixed period of
              time.Start invoicing for free.
            </p>
          </div>
        </div>
        <div>
          <img src="/public/images/contact-us/book-anytime.png" alt="" />
          <div className={styles.writings}>
            <div className={styles["card-title"]}>Online Ticket Purchasing</div>
            <p className={styles["card-description"]}>
              You can pay a ticket in 2 portions throughout a fixed period of
              time.Start invoicing for free.
            </p>
          </div>
        </div>
        <div>
          <img src="/public/images/contact-us/smart-deals.png" alt="" />
          <div className={styles.writings}>
            <div className={styles["card-title"]}>Customer Support</div>
            <p className={styles["card-description"]}>
              You can pay a ticket in 2 portions throughout a fixed period of
              time.Start invoicing for free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
