import { type FormEvent, type ReactNode } from "react";

import { Link } from "react-router";

import Input from "../../../components/Input/Input.tsx";
import Button from "../../../components/Button/Button.tsx";

import HugeiconsMail02 from "../../../icons/auth/HugeiconsMail02.tsx";

import styles from "./ForgotPassword.module.css";

export default function ForgotPassword(): ReactNode {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData.get("email"));
  };

  return (
    <div className={styles["forgot-password"]}>
      <div className={styles.writings}>
        <Link to="/" className={styles.logo}>
          Evenjo
        </Link>
        <h1>Forgot your password?</h1>
        <span>
          Please enter the email address associated with your account and we'll
          send you a verification code.
        </span>
      </div>

      <form onSubmit={handleFormSubmit}>
        <Input
          type="email"
          label="Email"
          name="email"
          iconLeft={<HugeiconsMail02 />}
          required
        />

        <Button type="submit" size="large">
          Get verification code
        </Button>

        <div className={styles["create-account"]}>
          Remembered your password ? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
