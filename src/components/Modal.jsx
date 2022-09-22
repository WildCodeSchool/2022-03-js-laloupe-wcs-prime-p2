import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";
import { AiTwotoneHeart } from "react-icons/ai";

const addStorage = (id) => {
  const storedData = window.localStorage.id
    ? window.localStorage.id.split(",")
    : [];

  if (!storedData.includes(id.toString())) {
    storedData.push(id);
    window.localStorage.id = storedData;
  }
};
const Modal = ({
  isShowing,
  hide,
  title,
  overview,
  posterPath,
  vote,
  date,
  id,
}) =>
  isShowing
    ? ReactDOM.createPortal(
        <div>
          <div className="modal-overlay">
            <img className="modalimg" src={posterPath} alt="a" />
            <div className="flexprops">
              <button
                className="modal-close-button"
                type="button"
                onClick={hide}
              >
                X
              </button>
              <h2 className="modal-body">{title}</h2>
              <p className="modal-overview">{overview}</p>
              <div className="flexbot">
                <span style={{ color: vote >= 7 ? "green" : "orange" }}>
                  ⭐️ {vote}
                </span>
                <p className="modal-date">Release date : {date}</p>
                <button
                  className="ccmodal"
                  type="button"
                  onClick={() => {
                    addStorage(id);
                    window.location.reload();
                  }}
                >
                  <AiTwotoneHeart />
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

export default Modal;
