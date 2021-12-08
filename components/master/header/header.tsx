import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.jpg";

import styles from "./header.module.scss";
import { shoppingCart } from "@class/menu/shopingCart";
import { useEffect, useState } from "react";
import { store } from "@class/storage";
export default function Header() {
  let [totalShopping, setTotalShopping] = useState<number>(0);
  useEffect(() => {
    store.get("shoppingCart").then((items) => {
      setTotalShopping(shoppingCart.total);
    });
  }, []);
  return (
    <header className={styles.header + " d-flex justify-content-between"}>
      <Link href="/">
        <a>
          <Image src={logo} alt="logo" width="50" height="50"></Image>
        </a>
      </Link>
      <Link href="/shopping">
        <a>
          Carrito
          {totalShopping}
        </a>
      </Link>
    </header>
  );
}
