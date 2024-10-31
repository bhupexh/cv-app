import { useState } from "react";
import General from "./General";
import Education from "./Education";
import Experience from "./Experience";
import FontButton from "./FontButtons";

export default function Form({ data, onChange }) {
  const fieldList = "rounded-xl border-[#3E7B5B] flex flex-col p-4 border-2";
  const inputList = "p-1 rounded-lg border-2 border-black";

  const [activeIndex, setActiveIndex] = useState(0);

  const components = [
    { Component: General, index: 0 },
    { Component: Education, index: 1 },
    { Component: Experience, index: 2 },
  ];

  return (
    <>
      <form
        className="flex bg-white h-full shadow-xl overflow-y-auto flex-col w-1/2 gap-4 p-4 border-4 border-[#3E7B5B] print:hidden grow rounded-3xl"
        action=""
        onSubmit={(e) => {
          e.preventDefault();
          window.print();
        }}
      >
        {components.map(({ Component, index }) => (
          <Component
            key={index}
            obj={data}
            onChange={onChange}
            fieldList={fieldList}
            inputList={inputList}
            isVisible={activeIndex === index}
            setIsVisible={() => setActiveIndex(index)}
          />
        ))}
        <FontButton />
        <button
          className="mt-auto self-center text-lg py-2 px-5 bg-[#4F46E5] hover:bg-[#6366f1] text-white font-bold rounded-xl"
          type="submit"
        >
          Preview
        </button>
      </form>
    </>
  );
}
