import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import logo from "./logo2.svg";
import { MdOutlinePeople } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import "./Products.scss";
import Table from "../../components/Table/Table";
import { API_URL } from "../../constans";
import { useNavigate } from "react-router";

function Products() {
  const [products, setProducts] = useState([]);
  const titleItem = ["Id", "Category", "Name", "Quantity", "Price(₴)"];
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
    <div className="products">
      <div className="products__box">
        <img
          className="products__img"
          src={logo}
          alt="logo"
          width="190"
          height="30"
        />
        <Button
          className="products__btn"
          text="Preview"
          icon={<MdOutlinePeople />}
          onClick={() => navigate("/productsInfo")}
        />
        <Button
          className="products__btn"
          text="Add product"
          icon={<GoPlus />}
        />
      </div>
      <div className="products__item">
        <h2 className="products__title">Products</h2>
        <Table dataTitle={titleItem} data={products} />
      </div>
    </div>
  );
}

export default Products;
