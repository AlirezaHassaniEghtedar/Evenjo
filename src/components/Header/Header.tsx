import { type ReactNode, useEffect, useState } from "react";

import { Link, NavLink } from "react-router";

import Button from "../Button/Button.tsx";
import { useAuth } from "../../contexts/AuthContext.tsx";

import MingcuteMenuLine from "../../icons/header/MingcuteMenuLine.tsx";
import MingcuteCloseLine from "../../icons/header/MingcuteCloseLine.tsx";

import clsx from "clsx";

import styles from "./Header.module.css";
import SolarUserRoundedLinear from "../../icons/auth/SolarUserRoundedLinear.tsx";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Events", href: "/events-list" },
  { title: "About Us", href: "/about" },
  { title: "Contact Us", href: "/contact" },
  { title: "FAQ", href: "/faq" },
  { title: "Privacy Policy", href: "/terms" },
];

export default function Header(): ReactNode {
  const { user, isAuthenticated } = useAuth();
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isNavMenuOpen, setIsNavMenuOpen] = useState<boolean>(false);

  const handleToggleNavMenu = () => {
    setIsNavMenuOpen((old) => !old);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className={clsx(styles["header"], scrolled && styles.sticky)}>
      <header>
        <Link to="/" className={styles.logo}>
          Evenjo
        </Link>
        <nav className={clsx(!isNavMenuOpen && styles.close)}>
          <span
            className={styles["close-button"]}
            onClick={handleToggleNavMenu}
          >
            <MingcuteCloseLine />
          </span>
          <ul>
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => clsx(isActive && styles.active)}
                  onClick={() => setIsNavMenuOpen(false)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div className={styles.actions}>
          {isAuthenticated ? (
            <div className={styles["user-section"]}>
              <span className={styles["user-name"]}>
                Hello, {user?.username}
              </span>
              <Link to="/profile">
                <Button size="medium">
                  <SolarUserRoundedLinear />
                  Profile
                </Button>
              </Link>
            </div>
          ) : (
            <>
              <Button size="medium">
                <Link to="/login">Login</Link>
              </Button>
              <Button size="medium">
                <Link to="/signup">Signup</Link>
              </Button>
            </>
          )}
          <span onClick={handleToggleNavMenu}>
            <MingcuteMenuLine />
          </span>
        </div>
      </header>
    </div>
  );
}
