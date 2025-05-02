import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./Card.scss";
import logo from "./logo.svg";
import { FaEye } from "react-icons/fa";

function Card() {
  return (
    <div className="card">
      <img
        src={logo}
        className="card__logo"
        alt="logo"
        width="190"
        height="30"
      />
      <Input
        type="email"
        placeholder="User Name"
        className="card__input"
      />
      <Input
        type="password"
        placeholder="Password"
        className="card__input"
        classDiv="card__input-box"
        icon = {<FaEye className="card__eye"/>}
      />
      <Button className="card__btn" text="Login" />
    </div>
  );
}

export default Card;
