import { HR } from "./PreviewPane";
import ToggleButton from "./ToggleButton";
import InputField from "./InputField";

export default function Education({
  obj,
  index,
  onChange,
  fieldList,
  isVisible,
  setIsVisible,
}) {
  const fields = [
    { label: "School", name: "school", type: "text" },
    { label: "Course Title", name: "title", type: "text" },
  ];

  const dates = [
    { label: "From", name: "edufrom", type: "date" },
    { label: "To", name: "eduto", type: "date" },
  ];

  return (
    <div className={fieldList}>
      <div className="flex justify-between">
        <div>Education</div>
        <ToggleButton isVisible={isVisible} onClick={() => setIsVisible()} />
      </div>
      <div
        className={`transition-max-height duration-500 overflow-hidden ${isVisible ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <HR />
        <div className="flex flex-col gap-2">
          {fields.map(({ label, name, type }) => (
            <InputField
              key={`education-${index}-${name}`}
              label={label}
              type={type}
              value={obj[name]}
              onChange={onChange}
              name={`education-${index}-${name}`}
            />
          ))}
        </div>
        <div className="flex gap-2 pt-2 w-full h-20 lg:gap-8">
          {dates.map(({ label, name, type }) => (
            <InputField
              key={`education-${index}-${name}`}
              label={label}
              type={type}
              value={obj[name]}
              onChange={onChange}
              name={`education-${index}-${name}`}
              className="grow"
            />
          ))}
        </div>
      </div>
    </div>
  );
}
