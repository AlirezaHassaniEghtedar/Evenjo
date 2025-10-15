import { type ReactNode } from "react";

import ContactForm from "./ContactForm/ContactForm.tsx";
import WhyChooseUsSection from "../../components/WhyChooseUsSection/WhyChooseUsSection.tsx";
import JoinUsSection from "../../components/JoinUsSection/JoinUsSection.tsx";

import styles from "./Contact.module.css";

function Contact(): ReactNode {
  return (
    <div className={styles["contact"]}>
      <div className={styles["hero-section"]}>
        <div className={styles.writings}>
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! 💬 Whether you have a question, need
            support with your booking, or just want to share feedback, our team
            is always ready to help. You can reach us through the form below, or
            connect with us directly via email or social media. No matter the
            issue—big or small—we’ll get back to you as quickly as possible.
            Your experience matters to us, and we’re here to make it smooth and
            enjoyable.
          </p>
        </div>
      </div>

      <WhyChooseUsSection />

      <ContactForm />

      <JoinUsSection />

      <div className={styles.map}>
        <a href="#">
          <img src="/public/images/map-image.png" alt="" />
        </a>
      </div>
    </div>
  );
}

export default Contact;
