import Link from "next/link";
import { useEffect, useState } from "react";

import { Card, Button, Container } from "semantic-ui-react";
import { categoria, Item, Menu } from "../../class/menu/menu";
import { ItemCard } from "../../components/menu/menu.components";

type CategoriasAMostrar = {
  categoria: categoria;
  href: string;
  title: string;
};
export default function menu() {
  let menuQuery = new Menu();
  let [menu, setMenu] = useState([] as Item[]);
  useEffect(() => {
    menuQuery.get().then((menu) => {
      if (menu) setMenu(menu);
    });
  }, []);

  const categorias: CategoriasAMostrar[] = [
    { href: "/menu/bebidas", categoria: "bebida", title: "Bebidas" },
    {
      href: "/menu/comidas",
      categoria: "comida",
      title: "Comidas",
    },
    {
      href: "/menu/postres",
      categoria: "postre",
      title: "Postres",
    },
  ];

  const CategoryResume = ({
    categoria,
    href,
    title,
  }: {
    [key: string]: string;
  }) => {
    return (
      <div>
        <div>
          <h3>{title}</h3>
          <Link href={href}>
            <Button as="a" primary>
              Ver más
            </Button>
          </Link>{" "}
        </div>
        <div>
          {menu && (
            <Card.Group>
              {menu
                .filter((item) => item.categoria === categoria)
                .map((item) => (
                  <ItemCard item={item} />
                ))}
            </Card.Group>
          )}
        </div>
      </div>
    );
  };
  return (
    <Container as="main">
      <h2>MENÚ</h2>
      <div className="container">
        {menu &&
          categorias.map((c) => (
            <CategoryResume
              categoria={c.categoria}
              title={c.title}
              href={c.href}
            />
          ))}
      </div>
    </Container>
  );
}
