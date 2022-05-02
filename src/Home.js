import React, { useEffect, useState } from "react";
import web from "../src/images2/pic2.jpg";
import "./App.css";
import Common from "./Common";
import Howitswork from "./Howitswork";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Aos from "aos";
import "aos/dist/aos.css";
import CarrdCommon from "./CarrdCommon";
import { Link } from "react-router-dom";

const Home = () => {
  const [startDate, setStartDate] = useState(new Date());

  //   const [fdata,setFdata]=useState({})

  //  const getFdata=(event)=>{
  //    event.target.value

  //  }
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <>
      <div className="rajbackground">
        <div className="header-content">
          <div class="container ">
            <div className="row">
              <div className="col-lg-12">
                <div className="text-container mt-5">
                  <h1>Travel, SERVICES, SOLUTIONS</h1>
                  <p className="p-heading p-large">
                    Travel is a top consultancy company specializing in business
                    growth using online marketing and conversion optimization
                    tactics
                  </p>
                  <div className="form-group">
                    <label className="control-label col-sm-2 mt-2">
                      search
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        className="form-control"
                        name="email"
                        placeholder="area, landmark and hotel name"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="control-label col-sm-2 mt-2">
                      search lowest airfair
                    </label>
                    <div className="col-sm-10">
                      <DatePicker
                        selected={startDate}
                        onChange={(date) => setStartDate(date)}
                      />
                      <br /> <br />
                      <input
                        type="password"
                        className="form-control"
                        name="pwd"
                        placeholder="search city"
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <div className="checkbox">
                        <label>
                          <input type="checkbox" /> Remember me
                        </label>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <div className="col-sm-offset-2 col-sm-10">
                      <button type="submit" className="btn btn-danger">
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="container common-cont mt-5">
        <br />
        <div className="row  hero text-dark">
          <div className="col-lg-6  header-left-side">
            <h1 className="display-2">
              These is a Home page
              <br />
              and travel with us
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
            <Link className="btn-Background" to="">
              get started
            </Link>
          </div>

          <div className="col-lg-6 ">
            <div className="rajSqure">
              <img src={web} alt="images" />
            </div>
          </div>
        </div>
      </section>
      <br />
      {/* <Common
        name="welcome to Home page"
        imgsrc={web}
        visit="/service"
        btname="Get started"
      /> */}
      <div data-aos="fade-up" className="container mt-3">
        <div className="mt-4 p-5 bg-primary text-white rounded">
          <h1>planning your next trip?</h1>
          <p>
            Subscribe to our newsletter. Get the latest travel trends & deals!
          </p>
          <div className="c-input-cntr">
            <div className="input-label">Email</div>
            <input
              className="c-input u-v-align-middle"
              value=""
              placeholder="Enter email id"
              type="text"
            />
            <button className="btn btn-danger">suscribe</button>
          </div>
        </div>
      </div>
      <CarrdCommon />

      <Howitswork />
    </>
  );
};

export default Home;
