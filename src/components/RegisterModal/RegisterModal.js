import React from "react";

import "./RegisterModal.css";

import PopupWithForm from "../PopupWithForm/PopupWithForm";

const RegisterModal = ({
  onClose,
  handleRegisterClick,
  handleAlternateButtonClick,
  handleSubmit,
}) => {
  return (
    <div className="registerModal">
      <PopupWithForm
        title="Sign up"
        buttonLabel="Sign up"
        alternateButtonLabel="Sign in"
        formSize="medium"
        onClose={onClose}
        handleAlternateButtonClick={handleAlternateButtonClick}
        handleSubmit={handleSubmit}
        isForm
      >
        <label className="registerModal__label">Email</label>
        <input
          className="registerModal__inputField"
          placeholder="Enter email"
          required
        ></input>
        <label className="registerModal__label">Password</label>
        <input
          className="registerModal__inputField"
          placeholder="Enter password"
          required
        ></input>
        <label className="registerModal__label">Username</label>
        <input
          className="registerModal__inputField"
          placeholder="Enter your username"
          required
        ></input>
      </PopupWithForm>
    </div>
  );
};

export default RegisterModal;
