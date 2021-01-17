import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import NominateButton from "../NominateButton/NominateButton";

// Renders movies from title search prop
const MoviesList = ({ movies, title, selectedMovie, handleNominate }) => {
  const showMovies = () => {
    const isMoviesValid = movies.length > 0 && movies[0] !== undefined;
    if (isMoviesValid) {
      return movies[0].map((movie) => {
        return (
          <ListItem key={movie.imdbID}>
            {movie.Title} ({movie.Year}){" "}
            {!selectedMovie.includes(movie.imdbID) ? (
              <NominateButton
                id={movie.imdbID}
                title={movie.Title}
                year={movie.Year}
                handleNominate={handleNominate}
                text="Nominate"
                status={false}
              />
            ) : (
              <NominateButton
                id={movie.imdbID}
                title={movie.Title}
                handleNominate={handleNominate}
                text="Nominate"
                status={true}
              />
            )}
          </ListItem>
        );
      });
    }
  };

  return (
    <Container>
      <Box width="100%">
        <section className="movies">
          <Heading as="h2" fontSize={{ sm: "24px", md: "30px", lg: "36px" }}>
            Results for "{title}"
          </Heading>
          {movies !== null ? (
            <UnorderedList spacing={5}>{showMovies()}</UnorderedList>
          ) : (
            ""
          )}
        </section>
      </Box>
    </Container>
  );
};

export default MoviesList;
