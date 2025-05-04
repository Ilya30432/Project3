import logo from "../Products/logo2.svg";
import laptop from "./laptop.png";
import { PiBasketLight } from "react-icons/pi";
import "./ProductsInfo.scss";
const ProductsInfo = () => {
  const infoTable = [
    { id: 1, category: "phone", name: "lenovo", quantity: 4, price: "100$" },
    { id: 2, category: "phone", name: "lenovo", quantity: 2, price: "300$" },
    { id: 3, category: "phone", name: "lenovo", quantity: 6, price: "200$" },
    { id: 4, category: "phone", name: "lenovo", quantity: 6, price: "200$" },
  ];
  return (
    <div className="info">
      <div className="goods">
        <img
          className="goods__img"
          src={logo}
          alt="logo"
          width="190"
          height="30"
        />
        <div className="goods__box">
          {infoTable.map((elem) => (
            <div className="goods__card" key={elem.id}>
              <img className="goods__card-img" src={laptop} alt="laptop" width="100" height="100" />
              <p className="goods__card-text">{elem.name}</p>
              <div className="goods__card-cont">
                <p className="goods__card-price">{elem.price}</p>
                <p className="goods__card-quantity">
                  Quantity: {elem.quantity}
                </p>
              </div>
              <p className="goods__card-send">
                <PiBasketLight /> Ready to ship
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
