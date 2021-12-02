/**
 * Plantilla basica
 */
export interface T {
  [key: string]: any;
}

/**Modelo basico */
export abstract class M<Template extends T = T> implements T {
  [key: string]: any;
  constructor(props?: Template | { [key: string]: any }) {
    for (let key in props) {
      this[key] = props[key];
    }
  }
}

export interface AsyncStorage {
  /**metodo para obtener el elemento, en caso de que no esté guardado, haga el llamado del servicio para obtenerlo */
  get<Item = any>(key?: string): Promise<Item | null>;

  /**Metodo para eliminar un elemento del array. */
  remove?<Item = any>(key: string): Promise<Item | null>;

  /**Metodo para actualizar un elemento en especifico */
  set?<Item = any>(key: string, value: Item): Promise<Item>;

  /**Metodo para consultar el servicio del elemento */
  fetch?<Item = any>(): Promise<Item>;

  /**Metodo que trae el elemento solo si este ya se encuentra guardado */
  find?<Item = any>(): Promise<Item | null>;
}
