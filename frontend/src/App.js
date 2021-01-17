import React, { useEffect, useState } from "react";
import "./App.scss";
import axios from "axios";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import Nominations from "./components/Nominations/Nominations";
import Search from "./components/Search/Search";
import { Box, Flex } from "@chakra-ui/react";

function App() {
  const [title, setTitle] = useState("");
  const [nominated, setNominated] = useState([]);
  const [nomId, setNomId] = useState([]);

  const handleNominate = (movie, id, year) => {
    // limit nominations to 5 selections only
    if (nominated.length < 5) {
      setNominated(nominated.concat({ title: movie, id, year }));
      setNomId(nomId.concat(id));
    }
  };
  const removeNominate = (title, id) => {
    setNominated(nominated.filter((movie) => movie.title !== title));
    setNomId(nomId.filter((movieId) => movieId !== id));
  };

  const handleValue = (text) => {
    setTitle(text);
  };
  const [movies, setMovies] = useState(null);
  const getMovies = (input) => {
    if (input) {
      axios
        .get(
          process.env.REACT_APP_URL +
            input +
            "&apikey=" +
            process.env.REACT_APP_API_KEY
        )
        .then((response) => {
          const results = response.data.Search;
          setMovies([results]);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  // render whenever search bar is being used
  useEffect(() => {
    getMovies(title);
  }, [title]);

  return (
    <div className="App">
      <Box padding="25px">
        <Flex
          direction="column"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Header />
          <Search handleValue={handleValue} />
        </Flex>
        <Flex direction={["column", "row"]} width="100%">
          <MoviesList
            movies={movies}
            title={title}
            selectedMovie={nomId}
            handleNominate={handleNominate}
          />
          <Nominations
            movies={nominated}
            selectedMovie={nomId}
            removeNominate={removeNominate}
          />
        </Flex>
      </Box>
    </div>
  );
}

export default App;
