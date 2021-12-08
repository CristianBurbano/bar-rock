import { BehaviorSubject, Subject } from "rxjs";
import { M } from "../common";
import { store } from "../storage";
import { Item } from "./menu";
export interface ShopingCartItem {
  item: Item;
  cantidad: number;
  precio: number;
}
export class ShopingCart extends M {
  // items: Subject<ShopingCartItem[]> = new BehaviorSubject<ShopingCartItem[]>([])
  private _key: string = "shoppingCart";
  private $items: ShopingCartItem[] = [];

  total: number;
  add(item: Item, cantidad: number = 1) {
    let precio = item.price * cantidad;
    this.$items.push({ item: item, cantidad: cantidad, precio: precio });
    store.set<ShopingCartItem[]>(this._key, this.$items);
    this.calcularTotal();
  }
  remove(item: ShopingCartItem) {
    let index = this.$items.indexOf(item);
    if (index > -1) {
      this.$items.splice(index, 1);
      this.calcularTotal();
      store.set<ShopingCartItem[]>(this._key, this.$items);
    }
  }

  private calcularTotal(): number {
    this.total = this.$items.reduce((total, cI) => total + cI.precio, 0);
    return this.total;
  }
}

export const shoppingCart = new ShopingCart();
