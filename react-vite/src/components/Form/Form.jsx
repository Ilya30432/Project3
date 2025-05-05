import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";

function Form({ className }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isPasswordErorr, setIsPasswordErorr] = useState(false);
  const [isNameErorr, setIsNameErorr] = useState(false);
  const [isName, setIsName] = useState("");
  const [isPassword, setIsPassword] = useState("");
  const [isLoginErorr, setIsLoginErorr] = useState(false);

  const handleClick = () => {
    setPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  const validForm = () => {
    if (!isName.trim()) setIsNameErorr(true);
    if (!isPassword.trim()) setIsPasswordErorr(true);

    return isName.trim() && isPassword.trim();
  };

  const handleChange = (event) => {
    if (event.target.name === "name") {
      setIsName(event.target.value);
      setIsNameErorr(false);
    }
    if (event.target.name === "password") {
      setIsPassword(event.target.value);
      setIsPasswordErorr(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValid = validForm();
    if (!isValid) {
      return null;
    }
    // Имитация валидаций с беканда и обработки их
    const userExists = userInfo.some((user) => {
      return user.name === isName && String(user.password) === isPassword;
    });

    if (userExists) {
      setIsLoginErorr(false);
      localStorage.setItem("token", "12345");
    } else {
      setIsLoginErorr(true);
    }
  };

  const userInfo = [
    { name: "Ivav", password: 2222 },
    { name: "Nikita", password: 4444 },
    { name: "Danya", password: 7777 },
  ];

  return (
    <form className={className} onSubmit={handleSubmit}>
      <Input
        type="text"
        name="name"
        placeholder="User Name"
        className="card__input"
        classDiv="card__input-box"
        onChange={handleChange}
      />
      {isNameErorr && <span> Please enter the name</span>}
      <Input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        name="password"
        className="card__input"
        classDiv="card__input-box"
        onChange={handleChange}
        icon={
          isPasswordVisible ? (
            <FaEye onClick={handleClick} className="card__eye" />
          ) : (
            <IoEyeOff onClick={handleClick} className="card__eye" />
          )
        }
      />
      {isPasswordErorr && <span> Please enter the password</span>}
      <Button className="card__btn" text="Login" />
      {isLoginErorr && <span> Data not valid </span>}
    </form>
  );
}

export default Form;
