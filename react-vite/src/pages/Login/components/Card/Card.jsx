import { useState } from "react";
import Input from "../../../../components/Input/Input";
import Button from "../../../../components/Button/Button";
import "./Card.scss";
import logo from "./logo.svg";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

function Card() {
  const [isPasswordVisible , setPasswordVisible] = useState(true)

  const handleClick = () => {
    setPasswordVisible(prevIsPasswordVisible => !prevIsPasswordVisible);
  };

  return (
    <div className="card">
      <img
        src={logo}
        className="card__logo"
        alt="logo"
        width="190"
        height="30"
      />
      <Input type="email" placeholder="User Name" className="card__input" />
      <Input
      type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        className="card__input"
        classDiv="card__input-box"
        icon={
          isPasswordVisible ? <FaEye onClick = {handleClick} className="card__eye" /> : <IoEyeOff onClick = {handleClick} className="card__eye"/>
      }
      />
      <Button className="card__btn" text="Login" />
    </div>
  );
}

export default Card;
