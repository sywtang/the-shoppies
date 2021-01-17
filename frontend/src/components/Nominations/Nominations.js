import {
  Box,
  Container,
  Heading,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import NominateButton from "../NominateButton/NominateButton";

// Render movies array containing the nominations from MoviesList
const Nominations = ({ movies, removeNominate }) => {
  const renderList = () => {
    const isMoviesValid = movies.length > 0 && movies[0] !== undefined;
    if (isMoviesValid) {
      return movies.map((movie) => {
        return (
          <ListItem key={Math.random()}>
            {movie.title} ({movie.year}){" "}
            <NominateButton
              title={movie.title}
              removeNominate={removeNominate}
              text="Remove"
              id={movie.id}
            />
          </ListItem>
        );
      });
    }
  };

  return (
    <Container>
      <Box w="100%">
        <section className="nominations">
          <Heading as="h2" fontSize={{ sm: "24px", md: "30px", lg: "36px" }}>
            Nominations
          </Heading>
          {movies !== null ? (
            <UnorderedList spacing={5}>{renderList()}</UnorderedList>
          ) : (
            ""
          )}
        </section>
      </Box>
    </Container>
  );
};

export default Nominations;
