function Input({ type, placeholder, classDiv,name, className, icon , onChange}) {
  return (
    <div className={classDiv}>
      <input  onChange = {onChange} type={type} name = {name} placeholder={placeholder} className={className} />
      {icon}
    </div>
  );
}

export default Input;
