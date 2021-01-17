const NominateButton = ({ title, handleNominate, removeNominate, text }) => {
  const handleSelect = () => {
    if (text === "Nominate") {
      handleNominate(title);
    } else if (text === "Remove") {
      removeNominate(title);
    }
  };
  return (
    <button className="movies__nominate" onClick={handleSelect}>
      {text}
    </button>
  );
};

export default NominateButton;
