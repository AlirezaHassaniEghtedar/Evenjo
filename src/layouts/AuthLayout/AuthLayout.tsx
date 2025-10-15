import { type ReactNode } from "react";

import Toaster from "../../components/Toaster/Toaster.tsx";

import { Outlet } from "react-router";

import styles from "./AuthLayout.module.css";

export default function AuthLayout(): ReactNode {
  return (
    <div className={styles["auth-layout"]}>
      <div className={styles["background-image"]}>
        <img src="/public/images/auth/light.png" alt="" />
        <img src="/public/images/auth/auth-bg.png" alt="" />
      </div>
      <main className={styles["auth-main"]}>
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}
