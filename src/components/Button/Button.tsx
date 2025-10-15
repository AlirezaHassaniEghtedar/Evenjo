import { type ComponentProps, type ReactNode } from "react";

import clsx from "clsx";

import styles from "./Button.module.css";

type Color = "primary" | "danger";
type Variant = "solid" | "outlined";
type Size = "small" | "medium" | "large";
type Shape = "rectangle";

type Props = ComponentProps<"button"> & {
  color?: Color;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
};

export default function Button({
  color = "primary",
  variant = "solid",
  size = "small",
  shape = "rectangle",
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[color],
        styles[variant],
        styles[size],
        styles[shape],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
