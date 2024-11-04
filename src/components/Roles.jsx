import { useState } from "react";
import InputField from "./InputField";
import add from "../assets/add.svg";

const Roles = ({ obj, onChange }) => {
  const [roles, setRoles] = useState([
    <InputField
      key={0}
      label={"Role 1"}
      value={obj["role1"]}
      onChange={onChange}
      name={"role1"}
    />,
  ]);

  const size = roles.length;

  const handleClick = () => {
    setRoles((prevRoles) => [
      ...prevRoles,
      <InputField
        key={size}
        label={`Role ${size + 1}`}
        value={obj[`role${size + 1}`]}
        onChange={onChange}
        name={`role${size + 1}`}
      />,
    ]);
  };

  return (
    <div>
      <div className="flex justify-end">
        <button
          type="button"
          className="border-2 border-black px-2 rounded-md"
          onClick={handleClick}
        >
          <img src={add} className="scale-75" alt="" />
        </button>
      </div>
      {roles}
    </div>
  );
};

export default Roles;
