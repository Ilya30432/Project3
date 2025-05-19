import { useState } from "react";
import Input from "../Input/Input";
import Button from "../Button/Button";
import { FaEye } from "react-icons/fa";
import { IoEyeOff } from "react-icons/io5";
import { useNavigate } from "react-router";

function Form({ className }) {
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const [isPasswordErorr, setIsPasswordErorr] = useState(false);
  const [isNameErorr, setIsNameErorr] = useState(false);
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoginErorr, setIsLoginErorr] = useState(false);
  const navigate = useNavigate()

  const handleClick = () => {
    setPasswordVisible((prevIsPasswordVisible) => !prevIsPasswordVisible);
  };

  const validForm = () => {
    if (!name.trim()) setIsNameErorr(true);
    if (!password.trim()) setIsPasswordErorr(true);

    return name.trim() && password.trim();
  };

  const handleChange = (event) => {
    const {name, value} = event.target
    if (name === "name") {
      setName(value);
      setIsNameErorr(false);
    }
    if (name === "password") {
      setPassword(value);
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
      return user.name === name && String(user.password) === password;
    });

    if (userExists) {
      setIsLoginErorr(false);
      setName("")
      setPassword("")
      localStorage.setItem("token", "12345");
      navigate("/products")
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
        value = {name}
        placeholder="User Name"
        className="card__input"
        classDiv="card__input-box"
        onInputChange={handleChange}
      />
      {isNameErorr && <span> Please enter the name</span>}
      <Input
        type={isPasswordVisible ? "text" : "password"}
        placeholder="Password"
        name="password"
        className="card__input"
        value = {password}
        classDiv="card__input-box"
        onInputChange={handleChange}
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
