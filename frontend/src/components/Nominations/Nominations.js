import NominateButton from "../NominateButton/NominateButton";

// Render movies array containing the nominations from MoviesList
const Nominations = ({ movies, removeNominate }) => {
  const renderList = () => {
    const isMoviesValid = movies.length > 0 && movies[0] !== undefined;
    if (isMoviesValid) {
      return movies.map((movie) => {
        return (
          <li key={Math.random()} className="nominations__item">
            {movie.title} ({movie.year})
            <NominateButton
              title={movie.title}
              removeNominate={removeNominate}
              text="Remove"
              id={movie.id}
            />
          </li>
        );
      });
    }
  };

  return (
    <section className="nominations">
      <h2 className="nominations__heading">Nominations</h2>
      {movies !== null ? (
        <ul className="nominations__list">{renderList()}</ul>
      ) : (
        ""
      )}
    </section>
  );
};

export default Nominations;
