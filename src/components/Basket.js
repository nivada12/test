import React from "react";

function Basket(props) {
  const { cart, Addproduct } = props;
  return (
    <aside className="row col-1">
      <h3>cart shopping</h3>
      <div>{cart.length === 0 && <div> cart is Emty</div>}</div>
      {cart.map((item) => (
        <div key={item.id} className="row">
          <div className="col-2">{item.title}</div>
          <div className="col-2">
            <button onClick={() => Addproduct(item)} className="add">
              +
            </button>
            {/* <button onClick={() => Remproduct(item)} className="remove">
              +
            </button> */}
          </div>
          <div className="col-2 text-right">
            {item.qt}x ${item.price}
          </div>
        </div>
      ))}
    </aside>
  );
}

export default Basket;
