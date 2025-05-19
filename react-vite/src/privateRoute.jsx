import { Navigate, Outlet } from "react-router-dom";

function PrivateRouter({ readirectPath = "/login" }) {
  if (!localStorage.getItem("token")) {
    return <Navigate to={readirectPath} replace />;
  }
  return <Outlet/>
}


export default PrivateRouter