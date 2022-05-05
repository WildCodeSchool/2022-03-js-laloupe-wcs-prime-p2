import Modal from "./Modal";
import useModal from "./UseModal";
// import CustomPagination from "./CustomPaginition";

const DisplayComponent = ({
  id,
  name,
  image,
  title,
  overview,
  // poster_path,
}) => {
  const { isShowing, toggle } = useModal();
  return (
    <>
      <figure className="category" key={id}>
        <div onClick={toggle} onKeyDown={toggle} role="button" tabIndex={0}>
          <img src={image} alt={name} key={id} />
        </div>
        <figcaption>{title}</figcaption>
        <div>
          <Modal
            // image={image}
            isShowing={isShowing}
            hide={toggle}
            key={id}
            id={id}
            title={title}
            overview={overview}
            posterPath={image}
          />
        </div>
      </figure>
      {/* <CustomPagination /> */}
    </>
  );
};

export default DisplayComponent;
