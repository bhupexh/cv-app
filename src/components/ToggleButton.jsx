import dropDown from "../assets/drop_arrow.svg";
import dropUp from "../assets/up_arrow.svg";

const ToggleButton = ({ isVisible, onClick }) => (
  <button
    type="button"
    className="border-2 rounded-md px-1 border-black"
    onClick={onClick}
  >
    {isVisible ? (
      <img src={dropUp} alt="Collapse" />
    ) : (
      <img src={dropDown} alt="Expand" />
    )}
  </button>
);

export default ToggleButton;
