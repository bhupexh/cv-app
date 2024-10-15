import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import jsPDF from "jspdf";
import { useState } from "react";

function handleForm(e) {
  e.preventDefault();

  const form = new FormData(e.target);

  const doc = new jsPDF();

  let x = 10,
    y = 10;
  form.forEach((value, key) => {
    doc.text(key + " " + value, x, y);
    y += 10;
  });

  const pdfData = doc.output("datauristring");
  window.open(pdfData);
}

export default function Form() {
  const obj = {
    name: "",
    mail: "",
    phone: "",
    school: "",
    title: "",
    duration: "",
    company: "",
    position: "",
    role: "",
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
    <>
      <form action="" onSubmit={handleForm}>
        <General obj={data} onChange={onChange} />
        <Education obj={data} onChange={onChange} />
        <Experience obj={data} onChange={onChange} />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
