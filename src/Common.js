import React from "react";
import { Link } from "react-router-dom";
import "./App.css";
const Common = (props) => {
  return (
    <>
      <section className="container common-cont mt-5">
        <br />
        <div className="row  hero">
          <div className="col-lg-7 col-md-12 col-sd-12 cheader-left-side">
            <h1 className="display-2">
              {props.name}
              <br />
              and it is responsive
            </h1>
            <p className="main-hero-para">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
            <Link className="btn-Background" to={props.btname}>
              get started
            </Link>
          </div>

          <div className="col-lg-5 aeroplane ">
            <div className="rajSqure">
              <img src={props.imgsrc} alt="images" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
