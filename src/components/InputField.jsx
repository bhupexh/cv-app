const InputField = ({ label, type, value, onChange, name }) => (
  <div className="flex flex-col">
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
    />
  </div>
);
export default InputField;
