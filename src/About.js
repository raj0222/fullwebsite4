import React, { useContext } from "react";
import Common from "./Common";
import web from "../src/images2/plane2.png";
import { conData } from "./Home";
import bgimage from "./video/backgroundv.mp4";
import "./App.css";
import SliderC from "./SliderC";
import CarrdCommon from "./CarrdCommon";

const About = () => {
  return (
    <>
      <div className="commonkush">
        <video
          autoPlay
          loop
          muted
          controls
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%,-50%)",
            zIndex: "-1",
          }}
        >
          <source src={bgimage} type="video/mp4" />
        </video>
      </div>
      <div className="common-div mt-5 px-5 m-5">
        <Common
          name="welcome to About page"
          imgsrc={web}
          visit="/contact"
          btname="Contact now"
        />
      </div>
      <br />
      <br />
      <br />
      <CarrdCommon />
      <SliderC />
    </>
  );
};

export default About;
