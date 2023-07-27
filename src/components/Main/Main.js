import React from "react";

import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import About from "../About/About";
import Footer from "../Footer/Footer";

const Main = () => {
  return (
    <>
      <div
        style={{
          backgroundImage:
            "../../images/georgia-de-lotz--UsJoNxLaNo-unsplash.png",
        }}
      >
        <Header />
        <SearchForm />
      </div>
      <About />
      <Footer />
    </>
  );
};

export default Main;
