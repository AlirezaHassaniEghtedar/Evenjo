import { type ReactNode } from "react";

import styles from "./Terms.module.css";

export default function Terms(): ReactNode {
  return (
    <div className={styles["terms"]}>
      <h1>Terms Privacy Policy</h1>

      <p>
        Welcome to Evenjo! We are committed to protecting your privacy and
        ensuring a safe and enjoyable experience for all our users. This page
        outlines our policies regarding the use of our website, ticket refunds,
        and the protection of your personal information. By using Evenjo, you
        agree to the terms outlined below.
      </p>

      <section>
        <h2>1 . Terms of Use</h2>
        <p>
          By accessing and using Evenjo, you agree to comply with the following
          terms and conditions:
        </p>
        <ul>
          <li>
            Eligibility:You must be at least 18 years old or have the consent of
            a legal guardian to use our services.
          </li>
          <li>
            Account Responsibility:You are responsible for maintaining the
            confidentiality of your account information and for all activities
            that occur under your account.
          </li>
          <li>
            Prohibited Activities:You may not use our site for any illegal or
            unauthorized purpose, including but not limited to fraud, reselling
            tickets without authorization, or violating intellectual property
            rights.
          </li>
          <li>
            Event Changes:Evenjo is not responsible for changes or cancellations
            made by event organizers. We will, however, notify you of any
            significant changes to your booked events.
          </li>
        </ul>
      </section>
      <section>
        <h2>2 . Ticket Refund Policy</h2>
        <p>
          At Evenjo, we strive to make your ticket-buying experience as seamless
          as possible. Please review our refund policy below:
        </p>
        <ul>
          <li>
            Refund Eligibility:Refunds are available only if an event is
            canceled or postponed. In such cases, we will notify you and provide
            instructions on how to request a refund.
          </li>
          <li>
            No Refunds for Personal Reasons:Unfortunately, we cannot offer
            refunds for changes in personal plans, missed events, or incorrect
            ticket purchases.
          </li>
          <li>
            Processing Time:Refunds may take up to 10 business days to process,
            depending on your payment method.
          </li>
          <li>
            Contact Us:For refund inquiries, please contact our customer support
            team at [support@evenjo.com].
          </li>
        </ul>
      </section>
      <section>
        <h2>3 . Privacy Policy</h2>
        <p>
          Your privacy is important to us. This section explains how we collect,
          use, and protect your personal information:
        </p>
        <ul>
          <li>
            Information We Collect:We collect information such as your name,
            email address, payment details, and event preferences when you
            create an account or purchase tickets.
          </li>
          <li>
            How We Use Your Information:Your information is used to process
            transactions, send event updates, and improve our services. We do
            not sell or share your data with third parties for marketing
            purposes.
          </li>
          <li>
            Data Security:We use industry-standard encryption and security
            measures to protect your data from unauthorized access or breaches.
          </li>
          <li>
            Cookies:Our website uses cookies to enhance your browsing
            experience. You can disable cookies in your browser settings, but
            this may affect site functionality.
          </li>{" "}
          <li>
            Third-Party Links:Our site may contain links to third-party
            websites. We are not responsible for the privacy practices or
            content of these sites.
          </li>
        </ul>
      </section>
      <section>
        <h2>4 . Change to This Policy</h2>
        <p>
          We may update our Privacy Policy and Terms of Use from time to time.
          Any changes will be posted on this page, and we encourage you to
          review them periodically. Your continued use of Evenjo after any
          changes constitutes your acceptance of the updated terms.
        </p>
      </section>
    </div>
  );
}
