import React from "react";
import { AsyncStorage } from "./common";

export class Storage implements AsyncStorage {
  memory: Map<string, any>;

  constructor(store: Map<string, any>) {
    this.memory = store;
  }
  public async get<Item>(key: string): Promise<Item | null> {
    let item = this.memory.get(key);
    return item ? ((await item) as Item) : await null;
  }

  public async set<Item>(key: string, value: Item): Promise<Item> {
    this.memory.set(key, value);
    return (await this.memory.get(key)) as Item;
  }
  public async remove<Item>(key: string): Promise<Item | null> {
    this.memory.delete(key);
    return (await this.get<Item>(key)) as Item;
  }
}

export const store = new Storage(new Map());

export const StorageContext = React.createContext<Storage>(store);
