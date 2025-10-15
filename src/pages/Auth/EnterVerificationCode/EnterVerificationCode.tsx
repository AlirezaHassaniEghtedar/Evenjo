import { type FormEvent, type ReactNode } from "react";

import { Link } from "react-router";

import Input from "../../../components/Input/Input.tsx";
import Button from "../../../components/Button/Button.tsx";

import SolarPasswordMinimalisticLinear from "../../../icons/auth/SolarPasswordMinimalisticLinear.tsx";

import styles from "./EnterVerificationCode.module.css";

export default function EnterVerificationCode(): ReactNode {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData.get("email"));
  };

  return (
    <div className={styles["enter-verification-code"]}>
      <div className={styles.writings}>
        <Link to="/" className={styles.logo}>
          Evenjo
        </Link>
        <h1>Email Verification Code</h1>
        <span>
          We've sent a 6-digit confirmation code to your email. Please enter the
          code in the box below to verify your reset password request.
        </span>
      </div>

      <form onSubmit={handleFormSubmit}>
        <Input
          type="text"
          pattern="^\d{6}$"
          label="Verification Code"
          name="verificationCode"
          iconLeft={<SolarPasswordMinimalisticLinear />}
          error="Enter exactly 6 digits"
          required
        />

        <Button type="submit" size="large">
          Confirm
        </Button>

        <div className={styles["create-account"]}>
          Remembered your password ? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
