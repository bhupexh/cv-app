const InputField = ({
  label,
  type,
  value,
  onChange,
  name,
  onClick,
  className = "",
}) => (
  <div className={`flex flex-col ${className}`}>
    <label htmlFor={name} className="pb-1">
      {label}:
    </label>
    <input
      className="border rounded-md p-1"
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      onClick={onClick}
    />
  </div>
);
export default InputField;
