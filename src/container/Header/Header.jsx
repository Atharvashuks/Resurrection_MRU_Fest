import React from "react";
import SubHeading from "../../components/SubHeading/SubHeading";

import { images } from "../../constants";
import "./Header.css";

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="About" />
      <h1 className="app__header-h1" style={{ marginRight: 12 }}>
        Resurrection 2K22
      </h1>
      <p className="p__opensans" style={{ margin: "2rem 0" }}>
        Some remarkable memories are made from the days when you become a part
        of an event so magnificent that it leaves you in complete amazement and
        astonishment. Witnessing moments like these makes us realize the facts
        that moments like these are occasional and every single minute of them
        should be entirely relished. Revitalizing moments like these requires
        monumental efforts to go forth and shine thereby being a part of it.
        <p style={{ marginTop: 8 }}>
          The fifth edition of Resurrection will be larger , far-reaching and
          better in every manner with the galaxy of intellectuals , distinct
          vision , illuminating ideas and excellency of art since it will be
          constructed from the ground up with the express purpose of becoming
          Pan India's largest cultural event.
        </p>
      </p>
      <button type="button" className="custom__button">
        Explore Menu
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.bollywood} alt="header" />
    </div>
  </div>
);

export default Header;
