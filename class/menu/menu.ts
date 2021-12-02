import { M, T } from "../common";
import { store } from "../storage";

export interface Item extends T {
  image?: string;
  title: string;
  description: string;
  price: number;
  categoria: categoria;
}
export type categoria = "bebida" | "comida" | "postre";

export class ItemClass extends M<Item> implements Item {
  categoria: "bebida" | "comida" | "postre";
  image?: string | undefined;
  title: string;
  description: string;
  price: number;
}

export class Menu {
  private _key: string = "menu";

  public async get(): Promise<Item[] | null> {
    let dataStore = await this.find();
    if (dataStore) return await dataStore;
    else return this.fetch();
  }

  public async fetch(): Promise<Item[]> {
    let items: Item[] = await (await fetch("/api/menu")).json();
    store.set<Item[]>(this._key, items);
    return items;
  }

  public async find(): Promise<Item[] | null> {
    return await store.get<Item[]>(this._key);
  }
}

export const menu = new Menu();
