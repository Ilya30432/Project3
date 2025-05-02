function Input({ type, placeholder, classDiv, className, icon }) {
  return (
    <div className={classDiv}>
      <input type={type} placeholder={placeholder} className={className} />
      {icon}
    </div>
  );
}

export default Input;
