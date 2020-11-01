import React from "react";
import Lottie from "react-lottie";
import Header from "../header/header";
import S_footer from "../s_footer/s_footer";
import animationData from "../../Assets/anim/questions.json";
import locationData from "../../Assets/anim/location.json";
import "./contact.scss";

const Contact = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const defaultlocation = {
    loop: true,
    autoplay: true,
    animationData: locationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div>
      <Header />

      <div className="contact_discription">
        <div className="con_lottie">
          <Lottie options={defaultOptions} height={425} width={380} />
        </div>

        <div className="wording">
          <span>Intrested in work with us or just have a question</span>
          <p>
            contact us at{" "}
            <span>
              <a
                style={{ color: "green", textDecoration: "none" }}
                href="mailto: ahsandev.pro@gmail.com"
                target="_blank"
              >
                Ahsandev.pro@gmail.com
              </a>
            </span>
          </p>
        </div>
      </div>

      <div className="contact_location">
        <div className="contact_lottie">
          <Lottie options={defaultlocation} height={425} width={550} />
        </div>

        <div className="contact_map">
          <iframe
            className="cont"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.768133379569!2d67.03186077267588!3d24.905889455014155!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0!2zMjTCsDU0JzI1LjMiTiA2N8KwMDInMDIuNSJF!5e0!3m2!1sen!2s!4v1597435923364!5m2!1sen!2s"
            width="600"
            height="450"
          />
        </div>
      </div>

      <div className="address">
        <h3>Address</h3>
        <p>Main satyana road, Allah ho chowk, bahaduabad, Quetta</p>
      </div>

      <S_footer />
    </div>
  );
};

export default Contact;
