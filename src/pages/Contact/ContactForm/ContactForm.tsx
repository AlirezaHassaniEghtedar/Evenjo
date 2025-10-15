import { type FormEvent, type ReactNode } from "react";

import Input from "../../../components/Input/Input.tsx";
import Textarea from "../../../components/Textarea/Textarea.tsx";
import Button from "../../../components/Button/Button.tsx";

import IconParkOutlineEditName from "../../../icons/contact/IconParkOutlineEditName.tsx";
import HugeiconsMail02 from "../../../icons/auth/HugeiconsMail02.tsx";
import SolarChatRoundDotsLinear from "../../../icons/contact/SolarChatRoundDotsLinear.tsx";
import SolarPenNewSquareLinear from "../../../icons/contact-form/SolarPenNewSquareLinear.tsx";

import { toast } from "react-toastify";

import type { ContactRequestDto } from "../../../dto/request/contact.request.dto.ts";

import styles from "./ContactForm.module.css";

export default function ContactForm(): ReactNode {
  const formSubmitHandler = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;

    const formData = new FormData(e.currentTarget);

    const name = formData.get("name")?.toString() ?? "";
    const email = formData.get("email")?.toString() ?? "";
    const subject = formData.get("subject")?.toString() ?? "";
    const message = formData.get("message")?.toString() ?? "";

    const payload: ContactRequestDto = {
      name,
      email,
      subject,
      message,
    };

    try {
      const res = await fetch(`${import.meta.env.VITE_API_BASE_URL}/contact/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (res.ok) {
        toast("Your message has been sent successfully", { type: "success" });
        form.reset();
      }
    } catch (err) {
      if (err instanceof Error) {
        toast(err.message, { type: "error" });
      } else {
        toast("Something went wrong", { type: "error" });
      }
    }
  };

  return (
    <div className={styles["contact-form"]}>
      <form onSubmit={formSubmitHandler} autoComplete="off">
        <h4>We’d Love to Hear From You</h4>
        <Input
          type="text"
          name="name"
          label="Your Name"
          iconLeft={<IconParkOutlineEditName />}
          required
        />
        <Input
          type="email"
          name="email"
          label="Your Email"
          iconLeft={<HugeiconsMail02 />}
          required
        />
        <Input
          type="text"
          name="subject"
          label="Subject"
          iconLeft={<SolarPenNewSquareLinear />}
          required
        />
        <Textarea
          label="your Message"
          name="message"
          iconLeft={<SolarChatRoundDotsLinear />}
          required
        />
        <Button type="submit" size="large">
          Submit
        </Button>
      </form>
    </div>
  );
}
