import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ isShowing, hide, title, overview, posterpath }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div
                className="modal"
                style={{
                  backgroundImage: `url(${posterpath})`,
                }}
              >
                <h2 className="modal-body">{title}</h2>
                <div className="modal-header">
                  <p className="overview">{overview}</p>
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
          </div>

          <style jsx="true">{`
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

            .modal-header {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              grid-template-rows: repeat(3, 100px);
            }

            .modal-close-button {
              font-size: 1.5rem;
              margin: 0;
              color: #000;
              cursor: pointer;
              border: 1px red solid;
              background: transparent;
            }
            .overview {
              grid-column: 2/ 3;
              grid-row: 1 / 2;
              color: white;
            }
            .poster {
              grid-column: 3/ 4;
              grid-row: 1 / 4;
              overflow: hidden;
              position: absolute;
              width: 25%;
            }
          `}</style>
        </>,
        document.body
      )
    : null;

export default Modal;
