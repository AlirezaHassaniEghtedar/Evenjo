import { type ReactNode } from "react";

import Microphone from "../../icons/Microphone.tsx";
import MingcuteMailSendLine from "../../icons/MingcuteMailSendLine.tsx";
import MingcutePhoneCallLine from "../../icons/MingcutePhoneCallLine.tsx";
import MingcuteLocationLine from "../../icons/MingcuteLocationLine.tsx";

import styles from "./About.module.css";

export default function About(): ReactNode {
  return (
    <div className={styles["about"]}>
      <div className={styles["hero-section"]}>
        <div className={styles["hero-section-background"]}>
          <img src="/public/images/about/about-us-bg.png" alt="" />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.writings}>
          <h1>
            Ab
            <span aria-hidden="true">
              <Microphone />
            </span>
            ut Us
          </h1>
          <p>
            Welcome to Evenjo – your go-to platform for finding, booking, and
            enjoying top events worldwide. From concerts and sports to theater
            and festivals, we make unforgettable experiences easy to access.
            Behind the scenes, our friendly and passionate team is here to
            support you every step of the way. Got a question or need help?
            We’re just a message away!
          </p>
        </div>
      </div>

      <div className={styles["why-choose-us"]}>
        <div className={styles.title}>
          <h2>Why Choose Evenjo?</h2>
          <span>Experience excellence with a team that truly cares</span>
        </div>
        <div className={styles.cards}>
          <div>
            <img src="/public/images/about/ticket-on-way.png" alt="" />
            <div className={styles.writings}>
              <div className={styles["card-title"]}>
                Your Ticket is on the Way!
              </div>
              <p className={styles["card-description"]}>
                We’re sending your ticket straight to your email. Just confirm
                your name and email below, and you’re all set for an
                unforgettable experience! 🚀
              </p>
            </div>
          </div>
          <div>
            <img src="/public/images/about/online-ticket.png" alt="" />
            <div className={styles.writings}>
              <div className={styles["card-title"]}>
                Online Ticket Purchasing
              </div>
              <p className={styles["card-description"]}>
                Allows users to browse events, select seats, and buy tickets
                instantly via secure payment methods 🎭
              </p>
            </div>
          </div>
          <div>
            <img src="/public/images/about/customer-suport.png" alt="" />
            <div className={styles.writings}>
              <div className={styles["card-title"]}>Customer Support</div>
              <p className={styles["card-description"]}>
                24/7 live chat, email, or phone support for booking issues.🌟
              </p>
            </div>
          </div>
          <div>
            <img src="/public/images/about/event-discovery.png" alt="" />
            <div className={styles.writings}>
              <div className={styles["card-title"]}>Event Discovery</div>
              <p className={styles["card-description"]}>
                Personalized suggestions based on user preferences, location,
                and past bookingsFilters for categories venues, and price
                ranges.The goal is to detect meaningful occurrences (events) in
                analysis, or automated responses.💰
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["experience-section"]}>
        <div>
          <img
            src="/public/images/about/experience-section-picture-1.png"
            alt=""
          />
          <div className={styles.writings}>
            <h4>Title: More Than Just a Ticket The Evenjo Experience</h4>
            <ol>
              <li>
                Every ticket is the start of a memory, not just entry to an
                event.
              </li>
              <li>
                Whether it’s a concert, sports match, or theater show – your
                full experience matters.
              </li>
            </ol>
          </div>
        </div>
        <div>
          <img
            src="/public/images/about/experience-section-picture-2.png"
            alt=""
          />
          <div className={styles.writings}>
            <ol>
              <li>
                Evenjo ensures a smooth and enjoyable journey from booking to
                the final moment.
              </li>
              <li>
                We connect you to world-class events with just a few clicks.
              </li>
              <li>Our platform is designed for ease, speed, and excitement.</li>
              <li>With Evenjo, every step feels like part of the show.</li>
            </ol>
          </div>
        </div>
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
