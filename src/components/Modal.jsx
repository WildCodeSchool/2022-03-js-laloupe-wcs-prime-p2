import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

const Modal = ({ isShowing, hide, title, overview, posterPath }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div
              className="modal"
              style={{
                backgroundImage: `url(${posterPath})`,
              }}
            >
              <div className="flexprops">
                <h2 className="modal-body">{title}</h2>
                <p className="modal-overview">{overview}</p>
                <button
                  className="modal-close-button"
                  type="button"
                  onClick={hide}
                >
                  <span className="close">&times;</span>
                </button>
              </div>
            </div>
          </div>

          {/* <style jsx="true">{`
            .modal-overlay {
              position: fixed;
              top: 0;
              left: 0;
              width: 100vw;
              height: 100vh;
              z-index: 1040;
              // animation-delay: 3s;
              transition: width 2s, height 2s, background-color 2s, transform 2s;
              display: block;
            }

            .modal-overlay:hover {
              transform: rotate3d(2, -0.5, -0.5, -0.05turn);
            }

            .modal-wrapper {
              position: fixed;
              top: 0;
              left: 0;
              z-index: 1050;
              width: 100%;
              height: 100%;
              overflow-x: hidden;
              overflow-y: auto;
              outline: 0;
              display: flex;
              align-items: center;
            }

            .modal {
              z-index: 100;
              position: relative;
              background-color: hsla(227, 99%, 7%, 0.83);
              margin: auto;
              border-radius: 5px;
              max-width: 80%;
              width: 50%;
              height: 65%;
              padding: 1rem;
              box-shadow: 5px 5px 5px 5px aqua;
              background-size: contain;
              background-repeat: no-repeat;
            }

            .flexprops {
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .modal-body {
              width: 30%;
              margin-left: 70%;
            }

            .modal-close-button {
              box-shadow: 0px 10 10px 10px rgba(0, 0, 0, 0.25);
              border-radius: 10px;
              background: transparent;
              color: aqua;
              margin-left: 95%;
              appearance: button;
              font-size: 1.5rem;
              // margin: 0;
              // color: aqua;
              // cursor: pointer;
              // border: 1px aqua solid;
              // margin-left: 95%;
            }

            .overview {
              width: 35%;
              margin-left: 60%;
              color: white;
            }
            .poster {
              overflow: hidden;
              position: absolute;
              width: 25%;
            }
          `}</style> */}
        </>,
        document.body
      )
    : null;

export default Modal;
