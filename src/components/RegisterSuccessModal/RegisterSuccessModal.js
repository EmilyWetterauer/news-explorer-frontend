import React from "react";

import "./RegisterSuccessModal.css";

// import closeButton from "../../images/close.svg";

import PopupWithForm from "../PopupWithForm/PopupWithForm";

const RegisterSuccessModal = ({ onClose, handleSignInButtonClick }) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onClose);

    return () => {
      document.removeEventListener("keydown", onClose);
    };
  }, [onClose]);

  return (
    <PopupWithForm
      onClose={onClose}
      formSize="extraSmall"
      formTitle="registerSuccess"
      formCloseButton="registerSuccess"
      title="Registration successfully completed!"
      buttonLabel="Sign in"
    >
      <a
        className="registerSuccessModal__signInLink"
        onClick={handleSignInButtonClick}
      >
        Sign in
      </a>
    </PopupWithForm>
  );
};

export default RegisterSuccessModal;
