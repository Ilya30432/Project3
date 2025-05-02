import Button from "../../components/Button/Button";
import logo from "./logo2.svg";
import { MdOutlinePeople } from "react-icons/md";
import { GoPlus } from "react-icons/go";
import "./Products.scss";
import { BsFillPencilFill } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

function Products() {
  const titleItem = ["Id", "Category", "Name", "Quantity", "Price(₴)"];
  const infoTable = [
    { id: 1, category: "phone", name: "lenovo", quantity: 4, price: "100$" },
    { id: 2, category: "phone", name: "lenovo", quantity: 2, price: "300$" },
    { id: 3, category: "phone", name: "lenovo", quantity: 6, price: "200$" },
  ];

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
        />
        <Button
          className="products__btn"
          text="Add product"
          icon={<GoPlus />}
        />
      </div>
      <div className="products__item">
        <h2 className="products__title">Products</h2>
        <table className="products__table">
          <thead>
            <tr className="products__table-info">
              {titleItem.map((elem, index) => (
                <th className="products__table-title" key={index}>
                  {elem}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {infoTable.map((elem, index) => (
              <tr
                className={`products__table-item ${
                  index % 2 === 0 ? "bg-white" : "bg-green"
                }`}
                key={elem.id}
              >
                <th className="products__table-list">{elem.id}</th>
                <th className="products__table-list">{elem.category}</th>
                <th className="products__table-list">{elem.name}</th>
                <th className="products__table-list">{elem.quantity}</th>
                <th className="products__table-list">{elem.price}</th>
                <div className="products__table-box">
                  <BsFillPencilFill/>
                  <FaTrashCan />
                </div>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Products;
