/* eslint-disable */
import DisplayComponent from "./DisplayComponent";
import "./MovieList.scss";
import useModal from "./UseModal";

const MovieList = ({ movies }) => {
  const { isShowing, toggle } = useModal();
  const addStorage = (id) => {
    const storedData = window.localStorage.id
      ? window.localStorage.id.split(",")
      : [];

    if (!storedData.includes(id.toString())) {
      storedData.push(id);
      window.localStorage.id = storedData;
    }
  };

  return (
    <div onClick={toggle} onKeyDown={toggle}>
      {movies.map((movie) => (
        <div key={movie.id} className="image-container">
          <DisplayComponent
            details
            key={movie.id}
            id={movie.id}
            name={movie.name}
            title={movie.title}
            overview={movie.overview}
            image={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            vote={movie.vote_average}
            date={movie.release_date}
          />

          <div
            role="button"
            tabIndex="0"
            onClick={() => movie.handleFavouritesClick(movie)}
          />
          <button
            className="cc"
            type="button"
            onClick={() => {
              addStorage(movie.id);
              window.location.reload();
            }}
          >
            👍
          </button>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
