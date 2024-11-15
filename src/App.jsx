import Form from "./components/Form";
import PreviewPane from "./components/PreviewPane";
import { useState } from "react";

export default function App() {
  const initialData = {
    general: [
      {
        name: "John Doe",
        email: "abc@example.com",
        phone: "9999-xxx-xxx",
      },
    ],
    education: [
      {
        school: "Yale",
        title: "MBA",
        edufrom: "2026-06-28",
        eduto: "2029-10-30",
      },
    ],
    experience: [
      {
        company: "ABC Inc",
        position: "XYZ",
        from: "2026-06-28",
        to: "2029-10-30",
      },
    ],
  };

  const [data, setData] = useState(initialData);

  function onChange(e) {
    const { name, value } = e.target;
    const [component, index, field] = name.split("-");
    setData((prevData) => {
      const updatedField = [...prevData[component]];
      updatedField[index] = {
        ...updatedField[index],
        [field]: value,
      };
      return { ...prevData, [component]: updatedField };
    });
  }

  return (
    <div className="box-border bg-[#f7f9fc] h-dvh flex items-center gap-16 px-2 py-4">
      <Form data={data} onChange={onChange} />
      <PreviewPane obj={data} />
    </div>
  );
}
