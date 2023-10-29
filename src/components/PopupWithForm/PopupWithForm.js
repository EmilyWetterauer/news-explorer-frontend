import React, { useState } from "react";

import "./PopupWithForm.css";

// import closeButton from "../../images/close.svg";

const PopupWithForm = ({
  children,
  title,
  buttonLabel,
  alternateButtonLabel,
  formSize,
  formTitle,
  formCloseButton,
  onClose,
  handleAlternateButtonClick,
  handleSubmit,
  isForm,
}) => {
  React.useEffect(() => {
    document.addEventListener("keydown", onClose);

    return () => {
      document.removeEventListener("keydown", onClose);
    };
  }, [onClose]);

  const handleClick = (e) => {
    e.preventDefault();
    handleSubmit();
  };

  return (
    <div className="popupWithForm__wrapper" onClick={onClose}>
      <form className={`popupWithForm__form ${formSize}`}>
        <h1 className={`popupWithForm__title ${formTitle}`}>{title}</h1>
        <button
          className={`popupWithForm__closeButton ${formCloseButton}`}
          // src={closeButton}
          onClick={onClose}
        />
        {children}
        {isForm && (
          <>
            <button
              className="popupWithForm__submitButton"
              onClick={handleClick}
            >
              {buttonLabel}
            </button>
            <div className="popupWithForm__signInText">
              {"or "}
              <a
                className="popupWithForm__SignInLink"
                onClick={handleAlternateButtonClick}
              >
                {alternateButtonLabel}
              </a>
            </div>
          </>
        )}
      </form>
    </div>
  );
};

export default PopupWithForm;
