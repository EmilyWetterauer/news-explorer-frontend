import React from "react";

import "./RegisterSuccessModal.css";

import closeButton from "../../images/close.svg";

const RegisterSuccessModal = ({ onClose, handleSignInButtonClick }) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onClose);

    return () => {
      document.removeEventListener("keydown", onClose);
    };
  }, [onClose]);

  return (
    <div className="registerSuccessModal__wrapper" onClick={onClose}>
      <div className="registerSuccessModal__container">
        <img
          className="registerSuccessModal__closeButton"
          src={closeButton}
          onClick={onClose}
        ></img>
        <h1 className="registerSuccessModal__title">
          Registration successfully completed!
        </h1>
        <a className="registerSuccessModal__signInLink" onClick={handleSignInButtonClick}>Sign in</a>
      </div>
    </div>
  );
};

export default RegisterSuccessModal;
