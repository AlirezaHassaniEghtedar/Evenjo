import { type ReactNode } from "react";

import { Link, NavLink } from "react-router";

import Microphone from "../../icons/Microphone.tsx";

import clsx from "clsx";

import styles from "./Footer.module.css";
import SocialMedia from "./components/SocialMedia/SocialMedia.tsx";
import BxBxlFacebook from "../../icons/social-media/BxBxlFacebook.tsx";
import UilInstagram from "../../icons/social-media/UilInstagram.tsx";
import AkarIconsLinkedinv2Fill from "../../icons/social-media/AkarIconsLinkedinv2Fill.tsx";
import AkarIconsYoutubeFill from "../../icons/social-media/AkarIconsYoutubeFill.tsx";
import UilTelegramAlt from "../../icons/social-media/UilTelegramAlt.tsx";

type NavItem = {
  title: string;
  href: string;
};

const navItems: NavItem[] = [
  { title: "Home", href: "/" },
  { title: "Contact us", href: "/contact" },
  { title: "About us", href: "/about" },
  { title: "FAQ", href: "/faq" },
  { title: "Privacy Policy", href: "/terms" },
];

export default function Footer(): ReactNode {
  return (
    <div className={styles["footer"]}>
      <footer>
        <div>
          <Link to="/" className={styles.logo}>
            Evenjo
          </Link>
          <Microphone />
        </div>
        <nav>
          <ul>
            {navItems.map((item) => (
              <li key={item.title}>
                <NavLink
                  to={item.href}
                  className={({ isActive }) => clsx(isActive && styles.active)}
                >
                  {item.title}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <Link to="#">
            <SocialMedia>
              <BxBxlFacebook />
            </SocialMedia>
          </Link>
          <Link to="#">
            <SocialMedia>
              <UilInstagram />
            </SocialMedia>
          </Link>
          <Link to="#">
            <SocialMedia>
              <AkarIconsLinkedinv2Fill />
            </SocialMedia>
          </Link>
          <Link to="#">
            <SocialMedia>
              <AkarIconsYoutubeFill />
            </SocialMedia>
          </Link>
          <Link to="#">
            <SocialMedia>
              <UilTelegramAlt />
            </SocialMedia>
          </Link>
        </div>
        <span>Copyright&copy;Evenjo</span>
      </footer>
    </div>
  );
}
