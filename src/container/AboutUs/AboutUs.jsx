import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.Resurrection} alt="G" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">Theme</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Let's embark on the most dramatic voyage in Bollywood film. Go back in
          time to see how cinema shaped from the 1990s to the 2020s. Our essence
          is to use the our Bollywood music, culture, fashion and attitude have
          been passed over generations through our bollywood icons. Let's go
          through the various stages and endeavor to resurrect some of them.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex __center">
        <img src={images.Resurrection} alt="G" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.{" "}
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
