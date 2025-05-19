import laptop from "../../pages/ProductsInfo/laptop.png";
import { PiBasketLight } from "react-icons/pi";

function CardInfo({onClick, data}) {
  return (
        <div onClick = {onClick} className="goods__card">
          <img
            className="goods__card-img"
            src={laptop}
            alt="laptop"
            width="100"
            height="100"
          />
          <p className="goods__card-text">{data.name}</p>
          <div className="goods__card-cont">
            <p className="goods__card-price">{data.price}</p>
            <p className="goods__card-quantity">Quantity: {data.quantity}</p>
          </div>
          <p className="goods__card-send">
            <PiBasketLight /> Ready to ship
          </p>
        </div>
  );
}

export default CardInfo;
