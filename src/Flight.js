import React, { useState, useEffect } from "react";
import AirFare from "./AirFare";
import axios from "axios";

const Flight = () => {
  const [fData, setFdata] = useState("");
  const [fly, setFly] = useState([]);

  const subData = (e) => {
    e.preventDefault();
  };

  const flightData = (e) => {
    setFdata(e.target.value);
  };
  console.log("input value", fData);

  const options2 = {
    method: "GET",

    url: `https://aerodatabox.p.rapidapi.com/flights/number/${fData}/2022-02-28`,
    headers: {
      "x-rapidapi-host": "aerodatabox.p.rapidapi.com",
      "x-rapidapi-key": "ac7ea9e5b9msh1159866ef3d17bdp153af3jsn2abff55084ef",
    },
  };

  axios
    .request(options2)
    .then(function (response) {
      setFly(response.data);
      console.log("api data", fly);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      <div className="rj m-5">
        <button className="btn btn-danger">
          <AirFare />
        </button>
      </div>
      <div className="rj mx-50% m-5">
        <form>
          <input
            type="text"
            placeholder="enter flight number"
            onChange={flightData}
          />
          <button onClick={subData}>click to view</button>
        </form>
      </div>
      <div className="cont1">
        <div className="container">
          <div className="row gx-4">
            {fly.map((value) => {
              console.log("map data", value);
              return (
                <div key={value.id} className="col-md-3 mx-3 gx-3">
                  <div className="card mt-40px " style={{ width: "18rem" }}>
                    <img
                      src={value.urlToImage}
                      className="card-img-top"
                      alt=""
                    />
                    <div className="card-body">
                      <h5 className="card-title">{value.lastUpdatedUtc}</h5>
                      <p className="card-text">{value.codeshareStatusr}</p>
                      <p className="card-text">{value.number}</p>
                      <p className="card-text">{`days: ${[value.departure].map(
                        (val1) => {
                          const ak = val1.airport;
                          return JSON.stringify(ak);
                        }
                      )}`}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};
export default Flight;
