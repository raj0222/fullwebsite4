import React from "react";
import "./Footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-md-4 ">
              <h4>travel</h4>
              <ul className="list-unstyled">
                <li>delhi</li>
                <li>mumbai </li>
                <li>indore</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>services</h4>
              <ul className="list-unstyled">
                <li>hotel booking</li>
                <li>flight ticket booking</li>
                <li>train ticket booking</li>
              </ul>
            </div>
            <div className="col-md-4">
              <h4>Address</h4>
              <ul className="list-unstyled">
                <li>naval nagar ziri burhanpur</li>
                <li>pincode 450331</li>
                <li>india</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="row reserved-to ">
          <h3>
            <Link
              to="https://www.facebook.com/raj.kushwah.562114"
              target="_blank"
            >
              {<AiFillFacebook />}
            </Link>
            <Link to="">{<AiFillInstagram />}</Link>
            <Link to="">{<AiFillTwitterCircle />}</Link>
            <Link to="">{<AiFillGithub />}</Link>
          </h3>
          <p>all right reserved to travel</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
