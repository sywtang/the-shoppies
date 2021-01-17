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
    <form className="movie-form" onSubmit={(event) => event.preventDefault()}>
      <label className="movie-form__title">Movie title</label>
      <input
        className="movie-form__input"
        name="search"
        type="text"
        value={text}
        onChange={(event) => handleChange(event)}
      />
    </form>
  );
};

export default Search;
