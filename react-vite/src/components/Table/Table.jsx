import { BsFillPencilFill } from "react-icons/bs";
import { FaTrashCan } from "react-icons/fa6";

function Table({dataTitle,data}) {
  return (
    <table className="products__table">
      <thead>
        <tr className="products__table-info">
          {dataTitle.map((elem, index) => (
            <th className="products__table-title" key={index}>
              {elem}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((elem, index) => (
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
            <th className="products__table-box">
              <BsFillPencilFill />
              <FaTrashCan />
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;