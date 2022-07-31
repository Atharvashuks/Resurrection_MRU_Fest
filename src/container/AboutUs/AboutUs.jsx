import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg2 flex__center section__padding2"
    id="about"
  >
    {/* <div className="app__aboutus-overlay flex__center">
      <img src={images.Resurrection} alt="G" />
    </div> */}

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About</h1>
        <img src={images.spoon} alt="about spoon" className="spoon__img" />
        <p className="p__opensans">
          Some remarkable memories are made from the days when you become a part
          of an event so magnificent that it leaves you in complete amazement
          and astonishment.<br /> Witnessing moments like these makes us realize the
          facts that moments like these are occasional and every single minute
          of them should be entirely relished. <br /> Revitalizing moments like these
          requires monumental efforts to go forth and shine thereby being a part
          of it.
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit ad hic
          aliquam at sed mollitia ut recusandae non in impedit facilis aliquid,
          quis odio, reprehenderit voluptatum inventore dolorem. Provident,
          quibusdam?{" "}
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
