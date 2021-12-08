import Link from "next/link";
import { useEffect, useState } from "react";
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
      <div className="row">
        <div className="justify-content-between d-flex">
          <h3>{title}</h3>
          <Link href={href}>
            <a className="btn btn-primary">Ver más</a>
          </Link>{" "}
        </div>
        <div className="cards row">
          {menu &&
            menu
              .filter((item) => item.categoria === categoria)
              .map((item) => <ItemCard item={item} />)}
        </div>
      </div>
    );
  };
  return (
    <main>
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
    </main>
  );
}
