import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import AOS from "aos";
AOS.init();

const Techitem = ({ techname, techimg, lightmode, fontColor }) => {
  return (
    <MouseParallaxContainer resetOnLeave>
      <MouseParallaxChild factorX={0.23} factorY={0.21} resetOnLeave>
        <div
          className="tech__item--cont"
          data-aos="fade"
          data-aos-duration="900"
        >
          <div
            className="tech__item"
            style={{
              boxShadow: lightmode
                ? "-2px 2px 15px #1d1d1d "
                : "-5px 5px 15px #000000",
            }}
          >
            <div className="tech__item--img--cont">
              <img src={techimg} alt="" className="tech__item--img" />
            </div>
            <div
              className="tech__item--name--cont"
              style={{ color: fontColor }}
            >
              <p className="tech__item--name">{techname}</p>
            </div>
          </div>
        </div>
      </MouseParallaxChild>
    </MouseParallaxContainer>
  );
};
export default Techitem;
