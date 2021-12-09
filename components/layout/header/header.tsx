import Link from "next/link";
import Image from "next/image";
import logo from "/public/logo.jpg";

import { Menu } from "semantic-ui-react";

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
    // <HeaderSR>

    <Menu as="header" inverted className={styles.header}>
      <Menu.Item as={Link} href="/">
        <a>
          <Image src={logo} alt="logo" width="50" height="50"></Image>
        </a>
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item as={Link} href="/shopping">
          <a className="item">
            Carrito
            {totalShopping}
          </a>
        </Menu.Item>
        <Menu.Item name="Logout" />
      </Menu.Menu>
    </Menu>
    // </HeaderSR>
  );
}
