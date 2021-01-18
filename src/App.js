import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "./components/Header/Header";
import MoviesList from "./components/MoviesList/MoviesList";
import Nominations from "./components/Nominations/Nominations";
import Search from "./components/Search/Search";
import { Box, Flex } from "@chakra-ui/react";
import NominateModal from "./components/Modal/Modal";

function App() {
  const [title, setTitle] = useState("");
  const [nominated, setNominated] = useState([]);
  const [nomId, setNomId] = useState([]);

  const handleNominate = (movie, id, year, poster) => {
    // limit nominations to 5 selections only
    if (nominated.length < 5) {
      setNominated(nominated.concat({ title: movie, id, year, poster }));
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
          console.log(results);
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
      <Box
        padding={{ md: "45px" }}
        bgGradient={[
          "linear(to-tr, teal.400,yellow.600)",
          "linear(to-t, blue.400, teal.300)",
          "linear(to-b, orange.400, purple.700)",
        ]}
        rounded="md"
      >
        <Flex
          direction="column"
          width="100%"
          alignItems="center"
          justifyContent="center"
        >
          <Header />
          {nominated.length === 5 && <NominateModal nominations={nominated} />}
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
