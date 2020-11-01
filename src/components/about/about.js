import React from "react";
import Header from "../header/header";
import S_footer from "../s_footer/s_footer";
import Lottie from "react-lottie";
import animationData from "../../Assets/anim/abouts.json";
import user1 from "../../Assets/user1.png";
import "./about.scss";

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className="about__page">
      <Header />
      <div className="about_media">
        <div className="about_text">
          <div className="comp_heading">
            <h2>Our Company</h2>
          </div>
          We love to hear from other writers, satisfied readers, or anyone else.
          The best way to get in touch is to use the form below or drop a line;
          our address is info at paragraphline.com We love paper zines and
          newsletters and free books and postcards, but we don’t love paper spam
          from people offering to refinance our mortgage. If you’ve got some
          dead tree you’d like to send our way, drop us an email and we’ll give
          you the coordinates.
        </div>

        <div className="about_lottie">
          <Lottie
            options={defaultOptions}
            // height={400}
            // width={400}
          />
        </div>
      </div>

      <div className="about_heading">
        <h1>
          Director<span style={{ color: "green" }}>'s</span>
        </h1>
      </div>

      <div className="first_person">
        <div className="user1">
          <img src={user1} />
        </div>
        <div className="user1_text">
          My name is <span style={{ color: "green" }}>Waleed</span>, and I’m a
          career writer. My job is to provide job seekers with expert advice on
          career-related topics. I read a lot and consult recruiting
          professionals so you don’t have to. I show you how to hack the
          recruitment process, create a job-winning resume, ace the job
          interview, and... introduce yourself, among others.
        </div>
      </div>
      <div className="second_person">
        <div className="user2">
          <img src={user1} />
        </div>
        <div className="user2_text">
          My name is <span style={{ color: "green" }}>Shahnawaz</span>, and I’m
          a career writer. My job is to provide job seekers with expert advice
          on career-related topics. I read a lot and consult recruiting
          professionals so you don’t have to. I show you how to hack the
          recruitment process, create a job-winning resume, ace the job
          interview, and... introduce yourself, among others.
        </div>
      </div>
      <S_footer />
    </div>
  );
};

export default About;
