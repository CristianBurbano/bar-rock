import { store } from "@class/storage";
import { ShopingCartItem, shoppingCart } from "class/menu/shopingCart";
import { useEffect, useState } from "react";

export const ShoppingCartPage: React.FC = () => {
  let [elementos, setElementos] = useState<ShopingCartItem[]>([]);
  useEffect(() => {
    store.get<ShopingCartItem[]>("shoppingCart").then((items) => {
      if (items) setElementos(items);
    });
  }, []);
  return (
    <div>
      esto es shopiing cart
      {JSON.stringify(elementos)}
    </div>
  );
};
export default ShoppingCartPage;
