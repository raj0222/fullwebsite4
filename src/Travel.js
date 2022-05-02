import axios from "axios";
import React, { useState } from "react";
import react from "react";

const Travel = () => {
  const [text, settext] = useState("");
  const [travel, settravel] = useState([]);
  const [days, setdays] = useState();
  const click = (e) => {
    console.log("workin");
    e.preventDefault();
    console.log(text);
    const options = {
      method: "POST",
      url: "https://trains.p.rapidapi.com/",
      headers: {
        "content-type": "application/json",
        "x-rapidapi-host": "trains.p.rapidapi.com",
        "x-rapidapi-key": "ac7ea9e5b9msh1159866ef3d17bdp153af3jsn2abff55084ef",
      },
      data: { search: `${text}` },
    };

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        console.log("resp", response);
        settravel(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  const handleinput = (e) => {
    settext(e.target.value);
    console.log(text);
  };
  try {
    travel.map((val) => {
      console.log(
        "dd",
        [val.data].map((val1) => {
          console.log("days", val1.days);
        })
      );
    });
  } catch (e) {
    console.log("errororor", e);
  }
  console.log("ddddd", days);
  return (
    <>
      <form class="d-flex justify-content-center m-5">
        Search
        <input
          onChange={handleinput}
          className="form-control me-2"
          style={{ width: "200px" }}
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button onClick={click} class="btn btn-outline-success" type="submit">
          Search
        </button>
      </form>
      <div className="cont2" style={{ height: "700px" }}>
        <div className="container">
          <div className="row">
            {travel.map((value) => {
              return (
                <div className="card mt-40px" style={{ width: "18rem" }}>
                  <div className="card-body">
                    <h5 className="card-title">{`${value.name}`}</h5>
                    <p className="card-text">
                      {`Traim num.${value.train_num}`}
                    </p>
                    <p className="card-text">{`From ${value.train_from}`}</p>

                    <p className="card-text">{`Departure time: ${value.data.departTime}`}</p>
                    {/* <p className="card-text">{`Mon:${value.data.days.Mon}Thu:${value.data.days.Thu}Wed:${value.data.days.Wed}Tue:${value.data.days.Tue}FRi:${value.data.days.Fri}sat:${value.data.days.Sat}sun:${value.data.days.Sun}`}</p> */}
                    <p className="card-text">{`days: ${[value.data].map(
                      (val1) => {
                        const ak = val1.days;
                        return JSON.stringify(ak);
                      }
                    )}`}</p>
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
export default Travel;
