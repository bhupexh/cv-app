import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/call.svg";

const icons = {
  email: mailIcon,
  phone: phoneIcon,
};

const PreviewPane = ({ obj }) => {
  const Experience = ({ data }) => {
    const from = formatDate(data.from);
    const to = formatDate(data.to);

    const roles = Object.keys(data)
      .filter((key) => key.startsWith("role"))
      .sort((a, b) => {
        const numA = parseInt(a.replace("role", ""), 10);
        const numB = parseInt(b.replace("role", ""), 10);
        return numA - numB;
      })
      .map((key) => (
        <div className="pl-2 w-full break-words">{`- ${data[key]}`}</div>
      ));

    console.log(data);
    return (
      <>
        <div className="flex justify-between">
          <div className="font-bold text-md">{data.position}</div>
          <div>{`${from} - ${to}`}</div>
        </div>
        <div>{data.company}</div>
        <div className="pl-4 w-full">{roles}</div>
      </>
    );
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString("en-US", {
      month: "short",
      year: "numeric",
    });
  };

  const Education = ({ data }) => {
    const from = formatDate(data.edufrom);
    const to = formatDate(data.eduto);
    return (
      <>
        <div className="flex justify-between">
          <div className="font-bold text-md">{data.title}</div>
          <div>{`${from} - ${to}`}</div>
        </div>
        <div>{data.school}</div>
      </>
    );
  };

  const Page = ({ children }) => {
    return (
      <div className="hidden preview-pane w-1/2 h-full border-4 shadow-xl rounded-3xl border-[#3E7B5B] print:border-black print:rounded-none bg-white preview lg:block">
        <div className="flex flex-col items-center justify-center gap-4 m-4">
          {children}
        </div>
      </div>
    );
  };

  return (
    <Page>
      <div className="text-xl font-bold">{obj.general[0].name}</div>
      <div className="flex gap-4">
        <Contact data={obj.general[0].email} alt="email" />
        <Contact data={obj.general[0].phone} alt="phone" />
      </div>
      <div className="w-full">
        <div className="text-lg font-bold">Education</div>
        <HR />
        {obj.education.map((item, itemIndex) => {
          return <Education key={itemIndex} data={item} />;
        })}
      </div>
      <div className="w-full">
        <div className="text-lg font-bold">Experience</div>
        <HR />
        {obj.experience.map((item, itemIndex) => {
          return <Experience key={itemIndex} data={item} />;
        })}
      </div>
    </Page>
  );
};

const Contact = ({ data, alt }) => {
  return (
    <div>
      <img className="inline pr-1" src={icons[alt]} alt={alt} />
      {data}
    </div>
  );
};

export const HR = () => {
  return <hr className="block clear-both my-2 w-full bg-[#666666] h-[3px] " />;
};

export default PreviewPane;
