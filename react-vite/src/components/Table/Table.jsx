import Modal from "../Modal/Modal";
import ModalForm from "../ModalForm/ModalForm";
import { BsFillPencilFill } from "react-icons/bs";
import { use, useState } from "react";
import { FaTrashCan } from "react-icons/fa6";

function Table({ dataTitle, data, delet, edit }) {
  const [open, setOpen] = useState(false);
  const [openForm, setOpenForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // MODAL DELETE
  const handleClickOpen = (id) => {
    setOpen(true);
    setSelectedProduct(id);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProduct(null);
  };

  const handleDelete = () => {
    delet(selectedProduct);
    handleClose();
  };

  // MODAL FORM

  const handleOpenForm = (data) => {
    setSelectedProduct(data);
    setOpenForm(true);
  };

  const handleCloseForm = () => {
    setOpenForm(false);
  };

  const handleEditForm = (id,elem) => {
    edit(id,elem);
    handleCloseForm();
  };

  return (
    <>
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
              <td className="products__table-list">{elem.id}</td>
              <td className="products__table-list">{elem.category}</td>
              <td className="products__table-list">{elem.name}</td>
              <td className="products__table-list">{elem.quantity}</td>
              <td className="products__table-list">{elem.price}</td>
              <td className="products__table-box">
                <BsFillPencilFill onClick={() => handleOpenForm(elem)} />
                <FaTrashCan onClick={() => handleClickOpen(elem.id)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        text="Confirm deletion?"
        open={open}
        handleDelete={handleDelete}
        handleClose={handleClose}
      />
      <ModalForm
        data={selectedProduct}
        openForm={openForm}
        text="Edit Product"
        handleEditForm={handleEditForm}
        handleCloseForm={handleCloseForm}
      />
    </>
  );
}
export default Table;
