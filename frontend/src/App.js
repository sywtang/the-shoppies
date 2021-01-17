import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import Nominations from "./components/Nominations/Nominations";
import Search from "./components/Search/Search";

function App() {
  const [title, setTitle] = useState("");
  const [nominated, setNominated] = useState([]);

  const handleNominate = (movie) => {
    setNominated(nominated.concat(movie));
  };
  const removeNominate = (movie) => {
    setNominated(nominated.filter((title) => title !== movie));
  };

  const handleValue = (text) => {
    setTitle(text);
  };

  return (
    <div className="App">
      <Header />
      <Search handleValue={handleValue} />
      <MoviesList title={title} handleNominate={handleNominate} />
      <Nominations title={nominated} removeNominate={removeNominate} />
    </div>
  );
}

export default App;
