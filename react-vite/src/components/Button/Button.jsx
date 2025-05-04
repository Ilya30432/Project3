function Button({ onClick ,className, text,icon }) {
  return <button onClick = {onClick} className={className}> {icon} {text}</button>;
}

export default Button;
