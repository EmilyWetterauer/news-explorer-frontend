import React from "react";

import "./SignInModal.css";

import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SignInModal = ({ onClose, handleAlternateButtonClick, handleSubmit }) => {
  return (
    <PopupWithForm
      title="Sign in"
      buttonLabel="Sign in"
      alternateButtonLabel="Sign up"
      formSize="small"
      formTitle="signIn"
      onClose={onClose}
      handleAlternateButtonClick={handleAlternateButtonClick}
      handleSubmit={handleSubmit}
      isForm
    >
      <label className="signInModal__emailLabel">Email</label>
      <input
        className="signInModal__emailInput"
        placeholder="Enter Email"
        required
      ></input>
      <label className="signInModal__passwordLabel">Password</label>
      <input
        className="signInModal__passwordInput"
        placeholder="Enter Password"
        required
      ></input>
    </PopupWithForm>
  );
};

export default SignInModal;
