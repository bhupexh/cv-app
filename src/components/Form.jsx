import General from "./General";
import Education from "./Education";
import Experience from "./Experience";

function handleForm() {
  window.print();
}

export default function Form({ data, onChange }) {
  const fieldList = "rounded-xl flex flex-col p-4 border-2 border-black";
  const inputList = "p-1 rounded-lg border-2 border-black";
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
        />
        <Education
          obj={data}
          onChange={onChange}
          fieldList={fieldList}
          inputList={inputList}
        />
        <Experience
          obj={data}
          onChange={onChange}
          fieldList={fieldList}
          inputList={inputList}
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
