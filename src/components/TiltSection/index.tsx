import React from "react";
import { ReactSVG } from "react-svg";

import pic1 from "../../assets/images/pic01.jpg";

type styleNum = 1 | 2 | 3 | 4 | 5 | 6;
interface ITiltSection {
  alt?: boolean;
  styleNum?: styleNum;
  imgSrc?: string;
  svgSrc?: string;
  title: string;
  description: string;
}
const TiltSection = (props: ITiltSection) => {
  const {
    alt,
    styleNum = 1,
    imgSrc = pic1,
    svgSrc = "dollar-sign.svg",
    title,
    description,
  } = props;

  return (
    <section
      className={`wrapper spotlight style${styleNum} ${alt ? "alt" : ""}`}
    >
      <div className="inner">
        <div className="image tilt-section-img">
          <img src={imgSrc} alt="" />
          <ReactSVG src={svgSrc} className="svg" />
        </div>
        <div className="content">
          <h2 className="major">{title}</h2>
          <p>{description}</p>
          <a href="/#" className="special">
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
};

export default TiltSection;
