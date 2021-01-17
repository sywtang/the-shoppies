// Button for adding and removing nominations
const NominateButton = ({
  title,
  id,
  year,
  handleNominate,
  removeNominate,
  text,
  status,
}) => {
  const handleSelect = () => {
    if (text === "Nominate") {
      handleNominate(title, id, year);
    } else if (text === "Remove") {
      removeNominate(title, id);
    }
  };
  return (
    <button
      className="movies__nominate"
      onClick={handleSelect}
      disabled={status}
    >
      {text}
    </button>
  );
};

export default NominateButton;
