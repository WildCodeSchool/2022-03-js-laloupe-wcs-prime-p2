/* eslint-disable */
import "./MovieList.scss";
import Modal from "./Modal";
import useModal from "./UseModal";
import DisplayComponent from "./DisplayComponent";

const MovieList = ({ movies}) => {
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
          {movie.poster_path && (
            <img
            src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            alt="movie"          
            />
            )}
          <div
            role="button"
            tabIndex="0"
            onClick={() => movie.handleFavouritesClick(movie)}
          />
          <button
            className="cc"
            type="button"
            onClick={() => {addStorage(movie.id)
              window.location.reload()}}
          >
            👍
          </button>
          <DisplayComponent
            isShowing={isShowing}
            hide={toggle}
            key={movie.id}
            id={movie.id}
            title={movie.title}
            overview={movie.overview}
            posterPath={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
            vote={movie.vote_average}
            date={movie.release_date}
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
