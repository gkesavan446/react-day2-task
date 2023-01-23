import "./App.css";
import { Content } from "./Content";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Navbar } from "./Navbar";
import { useState } from "react";

function App() {
  const datalist = [
    {
      img: "https://m.media-amazon.com/images/I/81QDBLe+kRL._SY355_.jpg",
      product: "Fancy Product",
      linethrough: false,
      price: "$40.00",
      price2: "$80.00",
      star: false,
    },
    {
      img: "https://flowerfashionindia.com/wp-content/uploads/2019/10/2Fresh_Flower_Garland.jpg",
      product: "Special Item",
      linethrough: true,
      price: "$20.00",
      price2: "$18.00",
      star: true,
    },
    {
      img: "https://vizagpellipoolajada.com/wp-content/uploads/2019/12/551213FF-A3D3-4AD3-B6A9-E28840164863-scaled-e1664538472163.jpeg",
      product: "Sale Item",
      linethrough: true,
      price: "$50.00",
      price2: "$25.00",
      star: false,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTamrM_mDFr9XulsDkn_J6C5CmiEYSddY6eZg&usqp=CAU",
      product: "Popular Item",
      linethrough: false,
      price: "",
      price2: "$40.00",
      star: true,
    },
    {
      img: "https://media.licdn.com/dms/image/C4E12AQFa19m9CzTp_A/article-inline_image-shrink_1500_2232/0/1599820050418?e=1679529600&v=beta&t=tj4XYk5mhgd1yTFCJY6eNANQK5etert-Zr2DxkTK2oc",
      product: "Sale Item",
      linethrough: true,
      price: "$50.00",
      price2: "$25.00",
      star: false,
    },
    {
      img: "https://www.rssonline.in/1887-thickbox_default/santhana-maalai-sandal-fancy-mala-garlands-online-7-line.jpg",
      product: "Fancy Product",
      linethrough: false,
      price: "$120.00",
      price2: "$280.00",
      star: true,
    },
    {
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuWW96sP3QBLG_TprtWAZJh0WS48tXX19exQ&usqp=CAU",
      product: "Special Item",
      linethrough: true,
      price: "$20.00",
      price2: "$18.00",
      star: true,
    },
    {
      img: "https://rukminim1.flixcart.com/image/612/612/l1ch4sw0/garland/5/c/p/1-size-16-inch-red-velvet-rose-flower-garland-mala-for-photo-original-imagcxnyq39vpqdj.jpeg?q=70",
      product: "Popular Item",
      linethrough: false,
      price: "",
      price2: "$40.00",
      star: true,
    },
  ];

  const [cart, setCart ] = useState(0)

  return (
    <div className="App">
      <Navbar cart={cart} setCart={setCart} />
      <Header />
      <section className="py-5">
        <div className="container px-4 px-lg-5 mt-5">
          <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
            {datalist.map(( dt, index) => {
              return <Content key={index} data={dt} cart={cart} setCart={setCart} />;
            })}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default App;
