import { type ReactNode } from "react";

import { Link } from "react-router";

import Button from "../../components/Button/Button.tsx";

import styles from "./NotFound.module.css";

export default function NotFound(): ReactNode {
  return (
    <div className={styles["not-found"]}>
      <div className={styles["action-box"]}>
        <div>
          Oops! The page you're looking for doesn't exist or may have been
          moved.
        </div>

        <Button size="medium">
          <Link to="/">Back to Homepage</Link>
        </Button>
      </div>

      <h1>404</h1>

      <img src="/public/images/not-found/404-bg.png" alt="" />
      <img src="/public/images/not-found/404-bg-overlay.png" alt="" />
    </div>
  );
}
