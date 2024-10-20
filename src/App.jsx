import Form from "./components/Form";
import PreviewPane from "./components/PreviewPane";
import { useState } from "react";

export default function App() {
  const obj = {
    name: "",
    email: "",
    phone: "",
    school: "",
    title: "",
    duration: "",
    company: "",
    position: "",
    role: "",
    from: "",
    to: "",
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
    <div className="lg:h-screen flex max-w-full gap-16 m-8">
      <Form data={data} onChange={onChange} />
      <PreviewPane data={data} />
    </div>
  );
}
