import axios from "axios";
import React, { useEffect, useState } from "react";
import Basket from "./Basket";

import Cardprod from "./style/Cardprod";

function ListCard() {
  const [list, setList] = useState([]);
  const [error, setError] = useState(null);
  const [cart, setCart] = useState([]);
  const Addproduct = (prod) => {
    const result = cart.find((x) => cart.x.id === prod.id);
    if (result) {
      setCart(
        cart.map((x) =>
          x.id === prod.id ? { ...result, qt: result.qt + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...prod, qt: 1 }]);
      console.log("object", cart);
    }
  };
  useEffect(() => {
    fetchProducts();
    async function fetchProducts() {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        setList(res.data);
        console.log("props", res.data);

        console.log("data", res.data);
      } catch (error) {
        setError(error.message);
      }
    }
  }, []);
  return (
    <div className="container-fluid">
      <div className="row  mt-2">
        <div className="row  col-8 ">
          {list.map((l) => {
            return <Cardprod Addproduct={Addproduct} key={l.id} obj={l} />;
          })}
        </div>
        <div className="col-4">
          <Basket Addproduct={Addproduct} cart={cart} key={cart.id} />
        </div>
      </div>
    </div>
  );
}

export default ListCard;
