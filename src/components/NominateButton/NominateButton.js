import { Button } from "@chakra-ui/react";
// Button for adding and removing nominations
const NominateButton = ({
  title,
  id,
  year,
  poster,
  handleNominate,
  removeNominate,
  text,
  status,
  colorScheme,
}) => {
  const handleSelect = () => {
    if (text === "Nominate") {
      handleNominate(title, id, year, poster);
    } else if (text === "Remove") {
      removeNominate(title, id);
    }
  };
  return (
    <Button
      colorScheme={colorScheme}
      className="movies__nominate"
      onClick={handleSelect}
      disabled={status}
      size="sm"
    >
      {text}
    </Button>
  );
};

export default NominateButton;
