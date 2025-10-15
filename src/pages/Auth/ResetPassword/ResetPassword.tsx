import { type FormEvent, type ReactNode } from "react";

import { Link } from "react-router";

import Input from "../../../components/Input/Input.tsx";
import Button from "../../../components/Button/Button.tsx";

import SolarLockKeyholeLinear from "../../../icons/auth/SolarLockKeyholeLinear.tsx";
import QuillEye from "../../../icons/auth/QuillEye.tsx";
import QuillEyeClosed from "../../../icons/auth/QuillEyeClosed.tsx";

import styles from "./ResetPassword.module.css";

export default function ResetPassword(): ReactNode {
  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    console.log(formData.get("password"));
    console.log(formData.get("confirmPassword"));
  };

  return (
    <div className={styles["reset-password"]}>
      <div className={styles.writings}>
        <Link to="/" className={styles.logo}>
          Evenjo
        </Link>
        <h1>Reset Password</h1>
        <span>Enter a new password below to change your password.</span>
      </div>

      <form onSubmit={handleFormSubmit}>
        <Input
          type="password"
          label="Password"
          name="password"
          iconLeft={<SolarLockKeyholeLinear />}
          iconRightDefault={<QuillEye />}
          iconRightToggled={<QuillEyeClosed />}
          required
        />

        <Input
          type="password"
          label="Confirm Password"
          name="confirmPassword"
          iconLeft={<SolarLockKeyholeLinear />}
          iconRightDefault={<QuillEye />}
          iconRightToggled={<QuillEyeClosed />}
          required
        />

        <Button type="submit" size="large">
          Reset password
        </Button>

        <div className={styles["create-account"]}>
          Remembered your password ? <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}
