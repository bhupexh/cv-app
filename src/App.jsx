import Form from "./components/Form";
import PreviewPane from "./components/PreviewPane";
import { useState } from "react";

export default function App() {
  const obj = {
    name: "John Doe",
    email: "yourmail@example.com",
    phone: "9997-XXX-XXX",
    school: "Yale",
    title: "MBA",
    edufrom: "2026-06-28",
    eduto: "2029-10-30",
    company: "ABC Inc",
    position: "XYZ",
    role: "",
    from: "2026-06-28",
    to: "2029-10-30",
  };

  const [data, setData] = useState(obj);

  function onChange(e) {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  }

  return (
    <div className="box-border bg-[#f7f9fc] h-dvh flex items-center gap-16 px-2 py-4">
      <Form data={data} onChange={onChange} />
      <PreviewPane data={data} />
    </div>
  );
}
