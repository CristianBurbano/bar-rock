import { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
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
      <main className="container">
        <h3>{title}</h3>
        <div className="row">
          {items.map((i) => (
            <ItemCard item={i} key={i.title} />
          ))}
        </div>
      </main>
    );
  };
}

export function ItemCard({ item }: ItemCardType) {
  const ordenar = () => {
    shoppingCart.add(item, 1);
    console.log(store);
    modales.alert("tu te lo buscaste mi amor XOX");
  };
  return (
    <Card key={item.title} className="col-4 m-2">
      <Card.Body>
        <Card.Title>{item.title}</Card.Title>
        <Card.Text>
          <p>{item.description}</p>
        </Card.Text>

        <button
          className="btn btn-primary"
          onClick={(e) => {
            BebidaModal();
          }}
        >
          Ordenar
        </button>
      </Card.Body>
    </Card>
  );
}

function BebidaModal() {
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
        onClick: () => {
          alert("se debe añadir a la ordén");
        },
      },
    ],
  });
  $subject.subscribe((answer) => {
    alert("pues al final se subscribió");
  });
}
