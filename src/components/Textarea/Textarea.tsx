import { type TextareaHTMLAttributes, type ReactNode } from "react";
import styles from "./Textarea.module.css";
import clsx from "clsx";

type TextareaProps = {
  label?: string;
  iconLeft?: ReactNode;
  error?: string;
  className?: string;
} & TextareaHTMLAttributes<HTMLTextAreaElement>;

export default function Textarea({
  label,
  iconLeft,
  error,
  className,
  ...props
}: TextareaProps) {
  return (
    <div className={styles["textarea-wrapper"]}>
      <div className={clsx(styles["textarea"], className ?? "")}>
        {iconLeft && iconLeft}

        <textarea {...props} />

        {label && <label>{label}</label>}
      </div>

      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
}
