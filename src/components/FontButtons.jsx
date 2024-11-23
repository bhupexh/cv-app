const FontButton = () => {
  const handleFontChange = (index) => {
    const previewPane = document.querySelector(".preview-pane");
    previewPane.classList.remove("font-sans", "font-serif", "font-mono");

    switch (index) {
      case 0:
        previewPane.classList.add("font-sans");
        break;
      case 1:
        previewPane.classList.add("font-serif");
        break;
      case 2:
        previewPane.classList.add("font-mono");
        break;
      default:
        break;
    }
  };

  return (
    <div className="flex justify-around">
      <Button type="Sans" onClick={() => handleFontChange(0)} />
      <Button type="Serif" onClick={() => handleFontChange(1)} />
      <Button type="Monospace" onClick={() => handleFontChange(2)} />
    </div>
  );
};

const Button = ({ type, onClick }) => {
  return (
    <button
      className="border-[#C6AFA0] rounded-lg hover:bg-[#C6AFA0] hover:font-[#202122] hover:border-[#ffffff] border-2 px-5 font-mono"
      type="button"
      onClick={onClick}
    >
      <div>{type}</div>
      <div>Aa</div>
    </button>
  );
};

export default FontButton;
