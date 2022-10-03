import React from "react";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";
import AOS from "aos";
import { LazyLoadImage } from "react-lazy-load-image-component";

AOS.init();

const Techitem = ({ techname, techimg, fontColor }) => {
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
              boxShadow: "-5px 5px 15px #000000",
            }}
          >
            <div className="tech__item--img--cont">
              <LazyLoadImage
                src={techimg}
                alt="marwan allisy tech item"
                className="tech__item--img"
                loading="lazy"
              />
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
