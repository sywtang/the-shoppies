import NominateButton from "../NominateButton/NominateButton";

// Component that makes the API call and renders the results in a list
const MoviesList = ({ movies, title, selectedMovie, handleNominate }) => {
  const showMovies = () => {
    const isMoviesValid = movies.length > 0 && movies[0] !== undefined;
    if (isMoviesValid) {
      return movies[0].map((movie) => {
        return (
          <li key={movie.imdbID} className="movies__item">
            {movie.Title} ({movie.Year})
            {!selectedMovie.includes(movie.imdbID) ? (
              <NominateButton
                id={movie.imdbID}
                title={movie.Title}
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
          </li>
        );
      });
    }
  };

  return (
    <section className="movies">
      <h2 className="movies__title">Results for "{title}"</h2>
      {movies !== null ? <ul>{showMovies()}</ul> : ""}
    </section>
  );
};

export default MoviesList;
