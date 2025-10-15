import { type ReactNode } from "react";

import CardsSection from "../../components/CardsSection/CardsSection.tsx";
import GallerySection from "../../components/GallerySection/GallerySection.tsx";
import JoinUsSection from "../../components/JoinUsSection/JoinUsSection.tsx";
import WhyChooseUsSection from "../../components/WhyChooseUsSection/WhyChooseUsSection.tsx";

import SolarBookmarkLinear from "../../icons/SolarBookmarkLinear.tsx";
import SolarTicketLinear from "../../icons/SolarTicketLinear.tsx";
import SolarConfettiMinimalisticLineDuotone from "../../icons/SolarConfettiMinimalisticLineDuotone.tsx";

import styles from "./Home.module.css";

export default function Home(): ReactNode {
  return (
    <div className={styles["home"]}>
      <img src="/public/images/home/light.png" alt="" />
      <div className={styles["hero-section"]}>
        <div className={styles["hero-section-background"]}>
          <img src="/public/images/home-hero-section-bg.png" alt="" />
          <div className={styles.overlay}></div>
        </div>
        <div className={styles.writings}>
          <h1>
            What <span>Event</span> would you like to go to?
          </h1>
          <p>
            More than 100 events in different countries are now available to
            you.
          </p>
        </div>
      </div>
      <ul className={styles["value-proposition-section"]}>
        <li>
          <SolarBookmarkLinear />
          Book Anytime
        </li>
        <li>
          <SolarTicketLinear />
          Refundable Tickets
        </li>
        <li>
          <SolarConfettiMinimalisticLineDuotone />
          Smart Deals
        </li>
      </ul>
      <CardsSection title="Concert" />
      <CardsSection title="Fun Events" />
      <GallerySection />
      <WhyChooseUsSection />
      <CardsSection title="Sports" />
      <CardsSection title="Festivals" />
      <JoinUsSection />
    </div>
  );
}
