import React, { useState } from "react";
import axios from "axios";


function AirFare() {
  const [rdata, setrData] = useState("");
  const [rdata1, setrData1] = useState("");
  const [fair, setFair] = useState([]);

  const myData = (e) => {
    setrData(e.target.value);
  };
  const myData1 = (e) => {
    setrData1(e.target.value);
  };

  const myClick = (event) => {
    event.preventDefault();
    console.log();
    console.log("input1", rdata);
    console.log("input2", rdata1);
  };

  const options = {
    method: "GET",
    url: "https://flight-fare-search.p.rapidapi.com/flight/search",
    params: {
      from: { rdata },
      to: { rdata1 },
      date: "2022-08-10",
      currency: "INR",
      type: "Economy",
      adult: "1",
      child: "0",
      infant: "0",
    },
    headers: {
      "x-rapidapi-host": "flight-fare-search.p.rapidapi.com",
      "x-rapidapi-key": "ac7ea9e5b9msh1159866ef3d17bdp153af3jsn2abff55084ef",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });

  return (
    <>
      From
      <input type="text" placeholder="enter airport code " onChange={myData} />
      TO
      <input type="text" placeholder="enter airport code " onChange={myData1} />
      <button onClick={myClick}>click to view</button>
      <div className="container">
        <div className="row gx-4">
          {fair.map((value) => {
            return (
              <div className="col-md-3 mx-3 gx-3">
                <div className="card mt-40px " style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{value.status}</h5>
                    <p className="card-text">{value.to}</p>
                    <p className="card-text">{value.currency}</p>
                    <p className="card-text">{value.date}</p>
                    <p className="card-text">{value.data}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AirFare;
