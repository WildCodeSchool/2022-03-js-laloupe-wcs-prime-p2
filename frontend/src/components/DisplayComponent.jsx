import Modal from "./Modal";
import useModal from "./UseModal";

const DisplayComponent = ({ id, name, image, title, overview }) => {
  const { isShowing, toggle } = useModal();
  return (
    <figure className="category" key={id}>
      <img src={image} alt={name} />
      <figcaption>{title}</figcaption>
      <div>
        <button className="modal-toggle" onClick={toggle}>
          show modal
        </button>
        <Modal
          // image={image}
          isShowing={isShowing}
          hide={toggle}
          key={id}
          id={id}
          title={title}
          overview={overview}
        />
      </div>
    </figure>
  );
};

export default DisplayComponent;
