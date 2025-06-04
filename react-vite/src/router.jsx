import { HashRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login/Login";
import Products from "./pages/Products/Products";
import ProductsInfo from "./pages/ProductsInfo/ProductsInfo";
import Erorr from "./pages/Erorr/Erorr";
import PrivateRouter from "./privateRoute";
import ProductPreview from "./pages/ProductPreview/ProductPreview";

function AppRouter() {
  return (
 <HashRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/login" replace />} />
        <Route path="/login" element={<Login />} />
        <Route element={<PrivateRouter />}>
          <Route path="/products" element={<Products />} />
          <Route path="/productsInfo" element={<ProductsInfo />} />
          <Route path="/productPreview/:productId" element={<ProductPreview />} />
        </Route>
        <Route path="*" element={<Erorr />} />
      </Routes>
    </HashRouter>
  );
}

export default AppRouter;
