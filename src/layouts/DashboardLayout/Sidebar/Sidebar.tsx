import { type ComponentProps, type ReactNode } from "react";

import SolarUserRoundedLinear from "../../../icons/auth/SolarUserRoundedLinear.tsx";
import SolarLogout2Linear from "../../../icons/SolarLogout2Linear.tsx";

import { Link, NavLink, useNavigate } from "react-router";

import clsx from "clsx";

import styles from "./Sidebar.module.css";
import MingcuteCloseLine from "../../../icons/header/MingcuteCloseLine.tsx";
import { useAuth } from "../../../contexts/AuthContext.tsx";

type Props = ComponentProps<"div"> & {
  handleToggleMenu: () => void;
};

export default function ({
  handleToggleMenu,
  className,
  ...otherProps
}: Props): ReactNode {
  const { logout } = useAuth();

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error("Logout failed:", error);
    } finally {
      navigate("/");
    }
  };

  return (
    <div className={clsx(styles.sidebar, className)} {...otherProps}>
      <div className={styles["sidebar-header"]}>
        <span onClick={handleToggleMenu}>
          <MingcuteCloseLine />
        </span>
        <Link to="/" className={styles.logo}>
          Evenjo
        </Link>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink
              to="/profile"
              className={({ isActive }) => clsx(isActive && styles.active)}
            >
              <SolarUserRoundedLinear />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              onClick={handleLogout}
              className={({ isActive }) => clsx(isActive && styles.active)}
            >
              <SolarLogout2Linear />
              Log out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}
