import NominateButton from "../NominateButton/NominateButton";

const Nominations = ({ title, removeNominate }) => {
  const renderList = title.map((movie) => {
    return (
      <li key={Math.random()} className="nominations__item">
        {movie}
        <NominateButton
          title={movie}
          removeNominate={removeNominate}
          text="Remove"
        />
      </li>
    );
  });

  return (
    <section className="nominations">
      <h2 className="nominations__heading">Nominations</h2>
      <ul className="nominations__list">{renderList}</ul>
    </section>
  );
};

export default Nominations;
