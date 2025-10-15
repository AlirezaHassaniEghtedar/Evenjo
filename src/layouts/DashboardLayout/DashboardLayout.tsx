import { type ReactNode, useState } from "react";

import Button from "../../components/Button/Button.tsx";
import Sidebar from "./Sidebar/Sidebar.tsx";
import MingcuteMenuLine from "../../icons/header/MingcuteMenuLine.tsx";
import SolarLogout2Linear from "../../icons/SolarLogout2Linear.tsx";

import Toaster from "../../components/Toaster/Toaster.tsx";

import { Outlet } from "react-router";
import { useAuth } from "../../contexts/AuthContext.tsx";

import clsx from "clsx";

import styles from "./DashboardLayout.module.css";

export default function DashboardLayout(): ReactNode {
  const { user, logout } = useAuth();
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);
  const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

  const handleToggleNavMenu = () => {
    setIsNavMenuOpen((old) => !old);
  };

  const handleLogout = async () => {
    setIsLoggingOut(true);
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <div className={styles["dashboard-layout"]}>
      <header>
        <div className={styles["user-profile"]}>
          <span onClick={handleToggleNavMenu}>
            <MingcuteMenuLine />
          </span>
          Hello {user?.username || "User"}
        </div>
        <Button size="medium" onClick={handleLogout} disabled={isLoggingOut}>
          <SolarLogout2Linear />
          {isLoggingOut ? "Logging out..." : "Log out"}
        </Button>
      </header>
      <Sidebar
        handleToggleMenu={handleToggleNavMenu}
        className={clsx(styles.sidebar, !isNavMenuOpen && styles.close)}
      />
      <main>
        <Outlet />
      </main>
      <Toaster />
    </div>
  );
}
