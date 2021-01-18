import {
  Box,
  Container,
  Flex,
  Heading,
  Image,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import NominateButton from "../NominateButton/NominateButton";
import { v4 as uuidv4 } from "uuid";

// Render movies array containing the nominations from MoviesList
const Nominations = ({ movies, removeNominate }) => {
  const renderList = () => {
    const isMoviesValid = movies.length > 0 && movies[0] !== undefined;
    if (isMoviesValid) {
      return movies.map((movie) => {
        return (
          <>
            <ListItem key={uuidv4()} listStyleType="none">
              {movie.title} ({movie.year}) <Image src={movie.poster} />
            </ListItem>
            <Flex justifyContent="flex-end" key={uuidv4()}>
              <NominateButton
                key={uuidv4()}
                title={movie.title}
                removeNominate={removeNominate}
                text="Remove"
                id={movie.id}
                colorScheme="pink"
              />
            </Flex>
          </>
        );
      });
    }
  };

  return (
    <Container>
      <Box w="100%" padding="20px" borderRadius="5px" boxShadow="dark-lg">
        <section className="nominations">
          <Heading
            as="h2"
            color="gray.700"
            fontSize={{ sm: "24px", md: "30px", lg: "36px" }}
          >
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
