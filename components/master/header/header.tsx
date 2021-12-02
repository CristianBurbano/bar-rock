import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.jpg";

import styles from "./header.module.scss";
export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a>
          <Image src={logo} alt="logo" width="50" height="50"></Image>
        </a>
      </Link>
    </header>
  );
}
