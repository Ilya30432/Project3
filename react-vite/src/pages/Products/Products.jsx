import { useEffect, useState } from "react";
import Button from "../../components/Button/Button";
import logo from "./logo2.svg";
import { MdOutlinePeople } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import "./Products.scss";
import Table from "../../components/Table/Table";
import { API_URL } from "../../constans";
import { useNavigate } from "react-router";
import ModalForm from "../../components/ModalForm/ModalForm";

function Products() {
  const [products, setProducts] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const titleItem = ["Id", "Category", "Name", "Quantity", "Price(₴)"];
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoaded) {
      getProducts();
    }
  }, [isLoaded]);

  const getProducts = async () => {
    try {
      const response = await fetch(`${API_URL}/Product`);
      const data = await response.json();
      setProducts(data);
      setIsLoaded(true);
    } catch (error) {
      throw new Error("Erorr");
    }
  };

  const deleteProduct = async (id) => {
    try {
      const response = await fetch(`${API_URL}/Product/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      setIsLoaded(false);
    } catch (error) {
      throw new Error("Erorr");
    }
  };

  const addProduct = async (data) => {
    try {
      const response = await fetch(`${API_URL}/Product`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: data.category,
          name: data.name,
          quantity: data.quantity,
          price: data.price,
        }),
      });
      setIsLoaded(false);
    } catch (error) {
      throw new Error("Erorr");
    }
  };

  const editProduct = async (id,data) => {
    try {
      const response = await fetch(`${API_URL}/Product/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          category: data.category,
          name: data.name,
          quantity: data.quantity,
          price: data.price,
        }),
      });
      setIsLoaded(false);
    } catch (error) {
      throw new Error("Erorr");
    }
  };

  const handleOpenForm = () => {
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };
  
  const handleAddProduct = (data) => {
    addProduct(data);
    handleCloseForm()
  }

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
          onClick={handleOpenForm}
        />
      </div>
      <div className="products__item">
        <h2 className="products__title">Products</h2>
        <Table
          delet={deleteProduct}
          edit={editProduct}
          dataTitle={titleItem}
          data={products}
        />
      </div>
      <ModalForm
        openForm={openForm}
        text="Add Product"
        handleAddProduct={handleAddProduct}
        handleCloseForm = {handleCloseForm}
      />
    </div>
  );
}

export default Products;
