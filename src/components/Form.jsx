import { useState } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

function handleForm() {
  window.print();
}

export default function Form({ data, onChange }) {
  const fieldList = "rounded-xl flex flex-col p-4 border-2 border-black";
  const inputList = "p-1 rounded-lg border-2 border-black";
  const obj = {
    general: false,
    education: false,
    Experience: false,
  };

  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <>
      <form
        className="h-fit flex flex-col w-1/2 gap-4 p-4 border-2 border-black print:hidden grow rounded-2xl"
        action=""
        onSubmit={handleForm}
      >
        <General
          obj={data}
          onChange={onChange}
          fieldList={fieldList}
          inputList={inputList}
          isVisible={activeIndex === 0}
          setIsVisible={() => setActiveIndex(0)}
        />
        <Education
          obj={data}
          onChange={onChange}
          fieldList={fieldList}
          inputList={inputList}
          isVisible={activeIndex === 1}
          setIsVisible={() => setActiveIndex(1)}
        />
        <Experience
          obj={data}
          onChange={onChange}
          fieldList={fieldList}
          inputList={inputList}
          isVisible={activeIndex === 2}
          setIsVisible={() => setActiveIndex(2)}
        />
        <button
          className="self-center w-20 py-1 border border-black rounded-md"
          type="submit"
        >
          Submit
        </button>
      </form>
    </>
  );
}
