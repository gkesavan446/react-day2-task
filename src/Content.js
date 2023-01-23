import { useState } from "react";

export function Content({ data, cart, setCart }) {
  console.log(data)
  // const { data } = props;
  // const data = {
  //   product: "Fancy Product",
  //   linethrough: false,
  //   price: "$40.00",
  //   price2: "$80.00",
  //   star: false,
  // };

  const linestyle = {
    textDecoration: "line-through",
  };

  const [show, setShow] = useState(true)

  const add = ()=> {
    setCart(cart + 1)
    setShow(!show)
  }

  const remove = ()=> {
    setCart(cart - 1)
    setShow(!show)
  }

  return (
    <div>
      <div className="col mb-5">
        <div className="card h-100">
          <img
            className="card-img-top"
            src={data.img}
            alt="..."
          />
          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{data.product}</h5>
              <h5 className="">{data.star == true ? "⭐⭐⭐⭐⭐" : null}</h5>
              <h6>
                <span style={data.linethrough == true ? linestyle : null}>
                  {data.price}
                </span>
                - {data.price2}
              </h6>
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              {show ? <button className="btn btn-outline-dark mt-auto" onClick={add}>Add to Cart</button> :
              <button className="btn btn-outline-dark mt-auto" onClick={remove}>Remove from Cart</button>}
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
}
