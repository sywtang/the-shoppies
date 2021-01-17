import { Button } from "@chakra-ui/react";
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
    <Button
      colorScheme="blue"
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
