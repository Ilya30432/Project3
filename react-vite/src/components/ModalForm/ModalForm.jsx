import { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";

export default function ModalForm({
  text,
  handleCloseForm,
  openForm,
  data,
  handleEditForm,
  handleAddProduct,
}) {
  // Состояние для контролируемых полей
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    quantity: "",
    price: "",
  });

  useEffect(() => {
    if (openForm) {
      setFormData({
        category: data?.category || "",
        name: data?.name || "",
        quantity: data?.quantity || "",
        price: data?.price || "",
      });
    }
  }, [openForm, data]);

  // Обработчик изменения любого поля
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Обработка отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Передаем данные наверх
    if (data) {
      await handleEditForm(data.id, formData);
    } else {
      await handleAddProduct(formData);
    }
    // Сбрасываем форму
    setFormData({
      category: "",
      name: "",
      quantity: "",
      price: "",
    });
  };

  // Отмена — просто закрываем форму и сбрасываем состояние
  const handleCancel = () => {
    handleCloseForm();
  };
  return (
    <Dialog open={openForm} aria-labelledby="alert-dialog-title">
      <DialogTitle id="alert-dialog-title">{text}</DialogTitle>

      <DialogContent sx={{ maxWidth: "400px" }}>
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
            mt: 1,
          }}
        >
          <TextField
            required
            name="category"
            label="Category"
            variant="outlined"
            fullWidth
            value={formData.category}
            onChange={handleChange}
          />
          <TextField
            required
            name="name"
            label="Name"
            variant="outlined"
            fullWidth
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            required
            name="quantity"
            label="Quantity"
            variant="outlined"
            fullWidth
            value={formData.quantity}
            onChange={handleChange}
          />
          <TextField
            required
            name="price"
            label="Price(₴)"
            variant="outlined"
            fullWidth
            value={formData.price}
            onChange={handleChange}
          />
          <Button onClick={handleCancel}>Cancel</Button>
          <Button type="submit" variant="contained">
            Submit
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
