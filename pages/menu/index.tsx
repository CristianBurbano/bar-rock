import Link from "next/link";
import { Menu } from "../../class/menu/menu";
export default function menu() {
  let menu = new Menu();
  menu.fetch();
  return (
    <main>
      <h2>MENÚ</h2>
      <div>
        <Link href="/menu/bebidas">
          <a className="btn btn-primary">BEBIDAS</a>
        </Link>
        <Link href="/menu/comidas">
          <a className="btn btn-primary">COMIDAS</a>
        </Link>
        <Link href="/menu/postres">
          <a className="btn btn-primary">POSTRES</a>
        </Link>
      </div>
    </main>
  );
}
