import Form from "../../../../components/Form/Form";
import "./Card.scss";
import logo from "./logo.svg";

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
      <Form className="card__form" />
    </div>
  );
}

export default Card;
