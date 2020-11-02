import React from "react";
import "./frontPage.scss";
import Lottie from "react-lottie";
import animationData from "../../Assets/anim/printer.json";

import AOS from "aos";
import "aos/dist/aos.css";

import label from "../../Assets/label.png";
import book from "../../Assets/book.png";
import price from "../../Assets/price-tag.png";
import cloth from "../../Assets/cloth.png";
import stationery from "../../Assets/stationery.png";
import card from "../../Assets/card.png";

import pro1 from "../../Assets/pro1.jpg";
import pro2 from "../../Assets/pro2.jpg";
import pro3 from "../../Assets/pro3.jpg";
import pro4 from "../../Assets/pro4.jpg";
import pro5 from "../../Assets/pro5.jpg";

const FirstPage = () => {
  AOS.init({
    duration: 900,
    easing: "ease",
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="frontPage">
      <div className="think">
        <div className="frontLogo">
          <h3>
            We print your <span></span>
          </h3>
        </div>
        <div className="lottie">
          <Lottie options={defaultOptions} height={400} width={400} />
        </div>
      </div>

      <div className="middlePage">
        <div className="middleText">
          <h3>We are working in 10+ categories</h3>
        </div>
        <div data-aos="fade-up" className="middlePic">
          <img className="mid" src={price} />
          <img style={{ marginLeft: "70px" }} src={book} />
          <img style={{ marginLeft: "70px" }} src={label} />
          <img style={{ marginLeft: "70px" }} src={cloth} />
          <img style={{ marginLeft: "70px" }} src={stationery} />
          <img style={{ marginLeft: "70px" }} src={card} />
        </div>
      </div>
      <div className="middleQuote">
        <h2>
          Our commitment to valuable{" "}
          <span style={{ color: "green" }}>results</span>
        </h2>
        <h3>
          We have to allow ourselves to be loved by the people who really love
          us, the people who really matter. Too much of the time, we are blinded
          by our own pursuits of people to love us, people that don't even
          matter, while all that time we waste and the people who do love us
          have to stand on the sidewalk and watch us beg in the streets! It's
          time to put an end to this. It's time for us to let ourselves be
          loved.
        </h3>
      </div>

      <div style={{ marginTop: "-120px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fill-opacity="1"
            d="M0,320L1440,160L1440,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="features">
        <h3>
          Our <span style={{ color: "gray" }}>FEATURE</span> prints
        </h3>
        <div className="features_pics">
          <img src={pro1} alt="pic" />
          <img src={pro2} alt="pic" />
          <img src={pro3} alt="pic" />
          <img src={pro4} alt="pic" />
          <img src={pro5} alt="pic" />
        </div>
      </div>
      <div style={{ marginBottom: "-180px" }}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#273036"
            fill-opacity="1"
            d="M0,96L1440,0L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default FirstPage;
