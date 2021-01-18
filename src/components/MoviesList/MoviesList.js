import {
  Box,
  Container,
  Flex,
  Heading,
  ListItem,
  UnorderedList,
  Image,
} from "@chakra-ui/react";
import NominateButton from "../NominateButton/NominateButton";
import { v4 as uuidv4 } from "uuid";

// Renders movies from title search prop
const MoviesList = ({ movies, title, selectedMovie, handleNominate }) => {
  const showMovies = () => {
    const isMoviesValid = movies.length > 0 && movies[0] !== undefined;
    if (isMoviesValid) {
      return movies[0].map((movie) => {
        return (
          <ListItem key={uuidv4()} listStyleType="none">
            {movie.Title} ({movie.Year})
            <Image src={movie.Poster} objectFit="cover" />
            {!selectedMovie.includes(movie.imdbID) ? (
              <Flex justifyContent="flex-end">
                <NominateButton
                  id={movie.imdbID}
                  title={movie.Title}
                  year={movie.Year}
                  poster={movie.Poster}
                  handleNominate={handleNominate}
                  text="Nominate"
                  status={false}
                  colorScheme="green"
                />
              </Flex>
            ) : (
              <Flex justifyContent="flex-end">
                <NominateButton
                  id={movie.imdbID}
                  title={movie.Title}
                  poster={movie.Poster}
                  handleNominate={handleNominate}
                  text="Nominate"
                  status={true}
                  colorScheme="green"
                />
              </Flex>
            )}
          </ListItem>
        );
      });
    }
  };

  return (
    <Container>
      <Box width="100%" padding="20px" borderRadius="5px" boxShadow="dark-lg">
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
