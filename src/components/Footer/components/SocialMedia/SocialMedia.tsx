import { type PropsWithChildren, type ReactNode } from "react";

import styles from "./SocialMedia.module.css";

type Props = PropsWithChildren;

export default function SocialMedia({ children, ...props }: Props): ReactNode {
  return (
    <div className={styles["social-media"]} {...props}>
      {children}
    </div>
  );
}
