import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="About" />
      <div className="header-text">
      <img src={images.Resurrectiontext} alt="header-text" />
      </div>
      <button type="button" className="custom__button">
        Explore Events
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.bollywood} alt="header" />
    </div>
  </div>
);

export default Header;
