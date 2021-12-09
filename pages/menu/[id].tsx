import { Item, menu } from "@class/menu/menu";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Image } from "semantic-ui-react";

const productPage: React.FC = () => {
  let router = useRouter();
  let [item, setItem] = useState<Item | undefined>(undefined);
  useEffect(() => {
    let id = router.query.id;
    console.log("este es el query", router);

    menu.get().then((data) => {
      setItem(data?.filter((item) => item.id === id)[0]);
    });
  }, [router]);
  return (
    <div>
      {(item && (
        <div>
          <Image src={item.image} />
          {item.title} <p>{item.description}</p>
        </div>
      )) || <div>Item no encontrado</div>}
    </div>
  );
};
export default productPage;
