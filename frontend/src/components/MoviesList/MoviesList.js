import axios from "axios";
import { useEffect, useState } from "react";

// Component that makes the API call and renders the results in a list
const MoviesList = ({ title }) => {
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
  const showMovies = () => {
    const isMoviesValid = movies.length > 0 && movies[0] !== undefined;
    if (isMoviesValid) {
      return movies[0].map((movie) => {
        return <li key={movie.imdbID}>{movie.Title}</li>;
      });
    }
  };

  useEffect(() => {
    getMovies(title);
  }, [title]);
  return (
    <section className="movies">
      <h2 className="movies__title">Results for "{title}"</h2>
      {movies !== null ? <ul>{showMovies()}</ul> : ""}
    </section>
  );
};

export default MoviesList;
