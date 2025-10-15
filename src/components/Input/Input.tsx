import { useState, type InputHTMLAttributes, type ReactNode } from "react";

import styles from "./Input.module.css";

type InputProps = {
  label?: string;
  iconLeft?: ReactNode;
  iconRightDefault?: ReactNode;
  iconRightToggled?: ReactNode;
  error?: string;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

export default function Input({
  label,
  type = "text",
  iconLeft,
  iconRightDefault,
  iconRightToggled,
  error,
  className,
  ...props
}: InputProps) {
  const [showPass, setShowPass] = useState(false);

  const isPassword = type === "password";

  const handleShowPassword = () => {
    setShowPass((old) => !old);
  };

  return (
    <div className={styles["input-wrapper"]}>
      <div className={styles["input"]}>
        {iconLeft && iconLeft}

        <input
          type={isPassword ? (showPass ? "text" : "password") : type}
          {...props}
        />

        {isPassword && (
          <span className={styles["icon-right"]} onClick={handleShowPassword}>
            {!showPass && iconRightDefault}
            {showPass && iconRightToggled}
          </span>
        )}

        {label && <label>{label}</label>}
      </div>
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
