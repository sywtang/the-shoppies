import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import Search from "./components/Search/Search";

function App() {
  const [title, setTitle] = useState("");
  const handleValue = (text) => {
    setTitle(text);
  };

  return (
    <div className="App">
      <Header />
      <Search handleValue={handleValue} />
      <MoviesList title={title} />
    </div>
  );
}

export default App;
