import mailIcon from "../assets/mail.svg";
import phoneIcon from "../assets/call.svg";

const icons = {
  email: mailIcon,
  phone: phoneIcon,
};

const PreviewPane = ({ data }) => {
  let name, education, experience;

  if (data.name) {
    name = <div className="text-xl font-bold">{data.name}</div>;
  }

  if (data.title || data.duration || data.school) {
    education = (
      <>
        <div className="text-lg font-bold">Education</div>
        <hr />
        <div className="flex justify-between">
          <div className="font-bold text-md">{data.title}</div>
          <div>{data.duration}</div>
        </div>
        <div>{data.school}</div>
      </>
    );
  }

  if (data.position || data.to || data.role || data.company) {
    experience = (
      <>
        <div className="text-lg font-bold">Experience</div>
        <hr />
        <div className="flex justify-between">
          <div className="font-bold text-md">{data.position}</div>
          <div>{(data.from ? `${data.from}-` : "") + data.to}</div>
        </div>
        <div>{data.company}</div>
        <div className="pl-4">{data.role ? `- ${data.role}` : ""}</div>
      </>
    );
  }

  return (
    <div className="hidden w-1/2 border-2 border-[#666666] preview lg:block">
      <div className="flex flex-col items-center justify-center gap-4 m-4">
        {name}
        <div className="flex gap-4">
          <Contact data={data.email} alt="email" />
          <Contact data={data.phone} alt="phone" />
        </div>
        <div className="w-full">{education}</div>
        <div className="w-full">{experience}</div>
      </div>
    </div>
  );
};

const Contact = ({ data, alt }) => {
  let Contact;

  if (data) {
    const iconSrc = icons[alt];
    Contact = (
      <div>
        <img className="inline pr-1" src={iconSrc} alt={alt} />
        {data}
      </div>
    );
  }

  return <>{Contact}</>;
};

export const HR = () => {
  return <hr className="block clear-both my-2 w-full bg-[#666666] h-[3px] " />;
};
export default PreviewPane;
