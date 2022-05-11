import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isShowing, hide, title, overview, posterPath, vote, date }) =>
  isShowing
    ? ReactDOM.createPortal(
        <div>
          <div className="modal-overlay">
            <img className="modalimg" src={posterPath} alt="a" />
            <div className="flexprops">
              <h2 className="modal-body">{title}</h2>

              <p className="modal-overview">{overview}</p>
              <div className="flexbot">
                <span style={{ color: vote >= 7 ? "green" : "orange" }}>
                  ⭐️ {vote}
                </span>
                <p className="modal-date">Release date : {date}</p>
                <button
                  className="modal-close-button"
                  type="button"
                  onClick={hide}
                >
                  X
                </button>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )
    : null;

export default Modal;
