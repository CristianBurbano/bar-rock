// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ItemClass } from "../../class/menu/menu";

export const itemsDemo: ItemClass[] = [
  {
    price: 3000,
    description: "Cerveza poker de 300ML",
    title: "CERVEZA POKER 300ML",
    categoria: "bebida",
  },
  {
    price: 3500,
    description: "Cerveza Heineken de 300ML",
    title: "CERVEZA HEINEKEN 300ML",
    categoria: "bebida",
  },
  {
    price: 5000,
    description: "Hamburguesa con carne de Perro",
    title: "Hamburguesa",
    categoria: "comida",
  },
];

export default function APIMenu(
  req: NextApiRequest,
  res: NextApiResponse<ItemClass[]>
) {
  res.status(200).json(itemsDemo);
}
