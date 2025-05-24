import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { API_URL } from "../../constans";
import logo from "../Products/logo2.svg";
import laptop from "../ProductsInfo/laptop.png"
import { FaLongArrowAltLeft } from "react-icons/fa";
import { useNavigate } from "react-router";
import "./ProductPreview.scss";

const ProductPreview = () => {
  const params = useParams();
  const navigate = useNavigate();
  const [products, setProducts] = useState({});

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/Product/${params.productId}`);
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      throw new Error("Erorr");
    }
  };

  return (
    <div className="preview">
      <div className="preview__cont-img">
        <FaLongArrowAltLeft className="preview__arrow" onClick={() => navigate("/productsInfo")} />
        <img className="preview__img" src={logo} alt="logo" width="190" height="30" />
      </div>
      <div className="preview__box">
          <h2 className="preview__box-title">{products.category} {products.name}</h2>
          <img className="preview__box-img" src={laptop} alt="img" width="150" height="100" />
         <div className="preview__cont">
          <h3 className="preview__cont-status">{products.status ? "in stock" : "out of stock"}</h3>
          <p className="preview__cont-price" >Price: {products.price}$</p>
          <p className="preview__cont-quantity" >Quantity: {products.quantity}</p>
         </div>
         <p className="preview__box-text" >{products.info}</p>
         <p className="preview__box-text" >{products.infoTwo}</p>
      </div>
    </div>
  );
};
export default ProductPreview;