import { type FormEvent, type ReactNode, useState } from "react";

import { Link } from "react-router";

import Input from "../../../components/Input/Input.tsx";
import Button from "../../../components/Button/Button.tsx";
import { useAuth } from "../../../contexts/AuthContext.tsx";

import SolarLockKeyholeLinear from "../../../icons/auth/SolarLockKeyholeLinear.tsx";
import HugeiconsMail02 from "../../../icons/auth/HugeiconsMail02.tsx";
import QuillEye from "../../../icons/auth/QuillEye.tsx";
import QuillEyeClosed from "../../../icons/auth/QuillEyeClosed.tsx";

import styles from "./Login.module.css";

export default function Login(): ReactNode {
  const { login } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      await login({ email, password });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Login failed");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className={styles["login"]}>
      <div className={styles.writings}>
        <Link to="/" className={styles.logo}>
          Evenjo
        </Link>
        <span>Please enter your email and password to login</span>
      </div>

      {error && (
        <div className={styles.error}>
          {error}
        </div>
      )}

      <form onSubmit={handleFormSubmit}>
        <Input
          type="email"
          label="Email"
          name="email"
          iconLeft={<HugeiconsMail02 />}
          required
          disabled={isLoading}
        />
        <Input
          type="password"
          label="Password"
          name="password"
          iconLeft={<SolarLockKeyholeLinear />}
          iconRightDefault={<QuillEye />}
          iconRightToggled={<QuillEyeClosed />}
          minLength={4}
          required
          disabled={isLoading}
        />

        <div className={styles["remember-forgot"]}>
          <label>
            <input type="checkbox" disabled={isLoading} />
            <span></span>
            Remember me
          </label>

          <Link to="/forgot-password">Forgot Password?</Link>
        </div>

        <Button type="submit" size="large" disabled={isLoading}>
          {isLoading ? "Logging in..." : "Log in"}
        </Button>

        <div className={styles["create-account"]}>
          New to Evenjo? <Link to="/signup">Create account</Link>
        </div>
      </form>
    </div>
  );
}