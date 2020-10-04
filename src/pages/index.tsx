import React from "react";

import { ReactSVG } from "react-svg";

import Layout from "../components/Layout";

import config from "../../config";

import pic1 from "../assets/images/pic01.jpg";
import pic2 from "../assets/images/pic02.jpg";
import pic3 from "../assets/images/pic03.jpg";
import pic4 from "../assets/images/pic04.jpg";
import pic5 from "../assets/images/pic05.jpg";
import pic6 from "../assets/images/pic06.jpg";
import pic7 from "../assets/images/pic07.jpg";

import dollar from "../assets/images/dollar.png";
import bank from "../assets/images/bank.png";
import file from "../assets/images/file.png";
import house from "../assets/images/house.png";
import pen from "../assets/images/pen.png";
import key from "../assets/images/key.png";

interface ICard {
  imgSrc: string;
  title: string;
  description: string;
}
const Card = (props: ICard) => {
  const { imgSrc, title, description } = props;
  return (
    <article>
      <a href="/#" className="image">
        <img src={imgSrc} alt="" />
      </a>
      <h3 className="major">{title}</h3>
      <p>{description}</p>
      <a href="/#" className="special">
        Learn more
      </a>
    </article>
  );
};

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

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="four" className="wrapper alt no-diag-top">
        <div className="inner">
          <h2 className="major">INMOBILIARIA A TU MEDIDA</h2>
          <section className="features">
            <Card imgSrc={pic1} title="House 1" description="something" />
            <Card imgSrc={pic2} title="House 2" description="something" />
            <Card imgSrc={pic3} title="House 3" description="something" />
            <Card imgSrc={pic4} title="House 4" description="something" />
            <Card imgSrc={pic5} title="House 5" description="something" />
            <Card imgSrc={pic6} title="House 6" description="something" />
          </section>
          <ul className="actions">
            <li>
              <a href="/#" className="button">
                Browse All
              </a>
            </li>
          </ul>
        </div>
      </section>

      <TiltSection
        svgSrc="svg/dollar-sign.svg"
        imgSrc={dollar}
        title="Genera renta y disfruta una propiedas en USA"
        description="Te ayudamos en todo el camino"
      />

      <TiltSection
        alt
        styleNum={2}
        svgSrc="svg/key.svg"
        imgSrc={key}
        title="Conseguimos el arrendatario ideal"
        description="Te ayudamos en todo el camino"
      />

      <TiltSection
        styleNum={3}
        svgSrc="svg/pen-tool.svg"
        imgSrc={pen}
        title="Te entregamos el titulo de propiedad"
        description="Te ayudamos en todo el camino"
      />

      <TiltSection
        alt
        styleNum={2}
        svgSrc="svg/file-text.svg"
        imgSrc={file}
        title="Gestionamos el proceso administrativo y legal de tu propiedas"
        description="Te ayudamos en todo el camino"
      />

      <TiltSection
        styleNum={3}
        svgSrc="svg/trending-up.svg"
        imgSrc={bank}
        title="Te ayudamos a gestionar el crédito hipotecario en USA"
        description="Te ayudamos en todo el camino"
      />

      <TiltSection
        alt
        styleNum={4}
        svgSrc="svg/crosshair.svg"
        imgSrc={house}
        title="Identificamos la propiedas ideal para ti"
        description="Te ayudamos en todo el camino"
      />
    </section>
  </Layout>
);

export default IndexPage;
