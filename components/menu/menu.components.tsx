import { useEffect, useState } from "react";
import Link from "next/link";
import { Card } from "semantic-ui-react";
import { categoria, Item, menu } from "../../class/menu/menu";
import { shoppingCart } from "../../class/menu/shopingCart";
import { store } from "../../class/storage";
import { Modales, modales } from "../common/modales";

type ItemCardType = { item: Item };

export default function ItemTypePage(title: string, categoria: categoria) {
  return () => {
    let [items, setItems] = useState([] as Item[]);
    useEffect(() => {
      menu.get().then((items) => {
        let postres = items?.filter((item) => item.categoria === categoria);
        if (postres) setItems(postres);
      });
    }, []);

    return (
      <main>
        <h3>{title}</h3>
        <Card.Group>
          {items.map((i) => (
            <ItemCard item={i} key={i.title} />
          ))}
        </Card.Group>
      </main>
    );
  };
}

export function ItemCard({ item }: ItemCardType) {
  return (
    <Link href={`menu/${item.id}`}>
      <Card
        key={item.id}
        image={item.image}
        header={item.title}
        description={item.description}
        // extra={
        //   <button
        //     className="btn btn-primary"
        //     onClick={(e) => {
        //       BebidaModal(item);
        //     }}
        //   >
        //     Ordenar
        //   </button>
        // }
      >
        {/* <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <p>{item.description}</p>
        </Card.Text>


      </Card.Body> */}
      </Card>
    </Link>
  );
}

function BebidaModal(item: Item) {
  const ordenar = () => {
    shoppingCart.add(item, 1);
    console.log(store);
    modales.alert("tu te lo buscaste mi amor XOX");
  };
  let body = (
    <div>
      <h3>Rayos funciono?</h3>
      Esto es un div aleatorio y personalizado
    </div>
  );
  let $subject = modales.custom({
    content: body,
    title: "lo que sea",
    open: true,
    buttons: [
      {
        title: "AÑADIR A LA ORDEN",
        onClick: (close) => {
          ordenar();
          close();
        },
      },
    ],
  });
  $subject.subscribe((answer) => {
    alert("pues al final se subscribió");
  });
}
