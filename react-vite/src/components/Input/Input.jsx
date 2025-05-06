function Input({ value,type, placeholder, classDiv,name, className, icon , onInputChange}) {
  return (
    <div className={classDiv}>
      <input value={value} onChange = {onInputChange} type={type} name = {name} placeholder={placeholder} className={className} />
      {icon}
    </div>
  );
}

export default Input;
