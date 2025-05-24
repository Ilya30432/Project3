import CardInfo from "../../components/CardInfo/CardInfo";
import logo from "../Products/logo2.svg";
import "./ProductsInfo.scss";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { API_URL } from "../../constans";

const ProductsInfo = () => {
  const [products,setProducts] = useState([])
  const navigate = useNavigate();
  
    useEffect(() => {
      getProducts();
    }, []);
  
    const getProducts = async () => {
      try {
        const response = await fetch(`${API_URL}/Product`);
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        throw new Error("Erorr");
      }
    };


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
          {products.map((elem) => (
            <CardInfo
              onClick={() => {
                navigate(`/productPreview/${elem.id}`)
              }}
              key={elem.id}
              data={elem}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsInfo;
