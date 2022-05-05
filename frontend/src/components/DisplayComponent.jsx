import Modal from "./Modal";
import useModal from "./UseModal";
import "./DisplayComponent.css";

const DisplayComponent = ({ id, name, image, title, overview, vote, date }) => {
  const { isShowing, toggle } = useModal();
  return (
    <figure className="category" key={id}>
      <div onClick={toggle} onKeyDown={toggle} role="button" tabIndex={0}>
        <img src={image} alt={name} key={id} />
      </div>
      <figcaption className="contenu">
        {title}

        <p className="vote" style={{ color: vote >= 7 ? "green" : "orange" }}>
          ⭐️ {vote}
        </p>
        <p className="date">Release date : {date} </p>
      </figcaption>

      <Modal
        isShowing={isShowing}
        hide={toggle}
        key={id}
        id={id}
        title={title}
        overview={overview}
        posterPath={image}
        vote={vote}
        date={date}
      />
    </figure>
  );
};

export default DisplayComponent;
