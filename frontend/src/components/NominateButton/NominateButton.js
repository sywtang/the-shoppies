const NominateButton = ({
  title,
  id,
  handleNominate,
  removeNominate,
  text,
  status,
}) => {
  const handleSelect = () => {
    if (text === "Nominate") {
      handleNominate(title, id);
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
