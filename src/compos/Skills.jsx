import Techitem from "./ui/techitem";
import { ProficientArray, familiarArray } from "./helper/skillArray";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  MouseParallaxChild,
  MouseParallaxContainer,
} from "react-parallax-mouse";

const Skills = () => {
  return (
    <section id="skills">
      <div className="skill__cont--wrapper" style={{ color: "#e0e0e0" }}>
        <div className="skill__section--title--cont">
          <h2
            className="skill__section--title section__title"
            data-aos="fade-up"
          >
            My <span className="blue"> technological Stack</span>.
          </h2>
        </div>
        <div className="skills__skill--cont">
          <div className="skill__Proficient--cont">
            <div className="skill__Proficient">
              <div
                className="skill--Proficien--title--cont"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h2 className="skill__Proficient--title">
                  Tech I am <span className="pink"> Proficient </span> with.
                </h2>
              </div>
              <div className="skills__cont">
                <MouseParallaxContainer
                  containerStyles={{
                    width: "100%",
                  }}
                >
                  <MouseParallaxChild
                    factorX={0.01}
                    factorY={0.01}
                    className="skills"
                  >
                    {ProficientArray.map((item, i) => (
                      <Techitem
                        key={i}
                        factorX={0.03}
                        factorY={0.1}
                        fontColor={item.fontColor}
                        techname={item.name}
                        techimg={item.img}
                      />
                    ))}
                  </MouseParallaxChild>
                </MouseParallaxContainer>
              </div>
            </div>
          </div>
          <div className="skill__Familiar--cont">
            <div className="skill__Familiar">
              <div
                className="skill--Familiar--title--cont"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <h2 className="skill__Familiar--title">
                  Tech I am <span className="pink"> Familiar </span>with.
                </h2>
              </div>
              <div className="skills__cont">
                <div className="skills">
                  <MouseParallaxContainer
                    containerStyles={{
                      width: "100%",
                    }}
                  >
                    <MouseParallaxChild
                      factorX={0.01}
                      factorY={0.01}
                      className="skills"
                    >
                      {familiarArray.map((item, i) => (
                        <Techitem
                          key={i}
                          fontColor={item.fontColor}
                          techname={item.name}
                          techimg={item.img}
                        />
                      ))}
                    </MouseParallaxChild>
                  </MouseParallaxContainer>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

AOS.init();
export default Skills;
