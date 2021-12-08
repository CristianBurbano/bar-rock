// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import { ItemClass } from "../../class/menu/menu";

export const itemsDemo: ItemClass[] = [
  {
    price: 3000,
    description: "Cerveza poker de 300ML",
    title: "CERVEZA POKER 300ML",
    categoria: "bebida",
    id: "asdfdeefd",
    image: "/images/menu/poker.jpg",
  },
  {
    price: 3500,
    description: "Cerveza Heineken de 300ML",
    title: "CERVEZA HEINEKEN 300ML",
    categoria: "bebida",
    id: "d34343dfd",
    image: "/images/menu/heineken.jpg",
  },
  {
    price: 5000,
    description: "Hamburguesa con carne de Perro",
    title: "Hamburguesa",
    categoria: "comida",
    image: "/images/menu/hamburger.jpg",
    id: "3zzedfdedfd",
  },
];

const methods: { [key: string]: methodFunction } = {
  GET: (req, res) => {
    res.status(200).json(itemsDemo);
  },
  DEFAULT: (req, res) => {
    res.status(403).end({
      message: "Metodo no soportado",
    });
  }, //   OPTIONS: (req, res) => {
  //     res.status(200);
  //   },
};
type methodFunction = (req: NextApiRequest, res: NextApiResponse) => any;
export default async function APIMenu(
  req: NextApiRequest,
  res: NextApiResponse<ItemClass[]>
) {
  let method = req.method ? req.method : "DEFAULT";
  methods[method] ? await methods[method](req, res) : methods.DEFAULT(req, res);
}
