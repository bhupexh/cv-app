import { HR } from "./PreviewPane";
import ToggleButton from "./ToggleButton";
import InputField from "./InputField";

export default function Experience({
  obj,
  onChange,
  fieldList,
  isVisible,
  setIsVisible,
}) {
  const fields = [
    { label: "Company Name", name: "company", type: "text" },
    { label: "Position Title", name: "position", type: "text" },
    { label: "Role", name: "role", type: "text" },
    { label: "From", name: "from", type: "date" },
    { label: "To", name: "to", type: "date" },
  ];

  return (
    <div className={fieldList}>
      <div className="flex justify-between">
        <div>Experience</div>
        <ToggleButton isVisible={isVisible} onClick={() => setIsVisible()} />
      </div>
      <div
        className={`transition-max-height duration-500 overflow-hidden ${isVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <HR />
        <div className="flex flex-col gap-2">
          {fields.map(({ label, name, type }) => (
            <InputField
              key={name}
              label={label}
              type={type}
              value={obj[name]}
              onChange={onChange}
              name={name}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
