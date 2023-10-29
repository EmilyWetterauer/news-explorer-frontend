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
      <label className="registerModal__emailLabel">Email</label>
      <input
        className="registerModal__emailField"
        placeholder="Enter email"
        required
      ></input>
      <label className="registerModal__passwordLabel">Password</label>
      <input
        className="registerModal__passwordField"
        placeholder="Enter password"
        required
      ></input>
      <label className="registerModal__userNameLabel">Username</label>
      <input
        className="registerModal__userNameField"
        placeholder="Enter your username"
        required
      ></input>
    </PopupWithForm>
  );
};

export default RegisterModal;
