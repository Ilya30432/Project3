import CardInfo from "../../components/CardInfo/CardInfo";
import logo from "../Products/logo2.svg";
import "./ProductsInfo.scss";
import { useNavigate } from "react-router";
const ProductsInfo = () => {
  const infoTable = [
    { id: 1, category: "phone", name: "lenovo", quantity: 4, price: "100$" },
    { id: 2, category: "phone", name: "lenovo", quantity: 2, price: "300$" },
    { id: 3, category: "phone", name: "lenovo", quantity: 6, price: "200$" },
    { id: 4, category: "phone", name: "lenovo", quantity: 6, price: "200$" },
  ];
  const navigate = useNavigate();
  
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
          {infoTable.map((elem) => <CardInfo onClick = {() => navigate(`/productPreview/${elem.id}`)} key={elem.id} data = {elem} />)}
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
