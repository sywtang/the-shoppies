import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

// Search bar to enter text
const Search = ({ handleValue }) => {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setText(event.target.value);
  };

  useEffect(() => {
    if (text === "" || text) handleValue(text);
  }, [text, handleValue]);

  return (
    <Box width="100%">
      <form onSubmit={(event) => event.preventDefault()}>
        <FormLabel> Movie title</FormLabel>
        <InputGroup>
          <InputLeftElement pointerEvents="none" children={<SearchIcon />} />
          <Input
            className="movie-form__input"
            name="search"
            type="text"
            value={text}
            onChange={(event) => handleChange(event)}
          />
        </InputGroup>
      </form>
    </Box>
  );
};

export default Search;
