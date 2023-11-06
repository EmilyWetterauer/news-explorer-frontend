import React from "react";

import "./SignInModal.css";

import PopupWithForm from "../PopupWithForm/PopupWithForm";

const SignInModal = ({ onClose, handleAlternateButtonClick, handleSubmit }) => {
  return (
    <div className="signInModal">
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
        <label className="signInModal__label">Email</label>
        <input
          className="signInModal__inputField"
          placeholder="Enter Email"
          required
        ></input>
        <label className="signInModal__label">Password</label>
        <input
          className="signInModal__inputField"
          placeholder="Enter Password"
          required
        ></input>
      </PopupWithForm>
    </div>
  );
};

export default SignInModal;
