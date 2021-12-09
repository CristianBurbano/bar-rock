import { Card, Icon, Image } from "semantic-ui-react";
import Link from "next/link";

const menu: Tmenu[] = [
  {
    image: "/images/menu.jpg",
    title: "Menú",
    description: "Pide tu comida para llevarla a la mesa",
    href: "menu",
  },
  {
    image: "/images/musica.jpg",
    title: "Musica",
    description: "Sugierenos canciones para ponerlas a sonar",
    href: "musica",
  },
  {
    image: "/images/pqr.jpg",
    title: "Peticiones, Quejas y Reclamos",
    description:
      "Has tenido algún inconveniente o tienes alguna sugerencia que nos puedas hacer?, escribenos y ayudanos a ser mejor",
    href: "PQR",
  },
];

interface Tmenu {
  image: string;
  title: string;
  description: string;
  href: string;
}

const itemCard = (item: Tmenu, id: number) => {
  let { image, title, description, href } = item;
  return (
    <Link href={href} key={id}>
      <Card>
        <Image src={image} wrapped ui={false} />
        <Card.Content>
          <Card.Header>{title}</Card.Header>
          <Card.Description>{description}</Card.Description>
        </Card.Content>
      </Card>
    </Link>
  );
};

const ItemList = () => {
  return (
    <Card.Group itemsPerRow="3">
      {menu.map((item, key) => itemCard(item, key))}
    </Card.Group>
  );
};

export default ItemList;
