import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function News() {
  const [data, setData] = useState([]);

  const getNews = () => {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=in&apiKey=b1418ce71eae41bda192195f653cff41&q=india"
      )
      .then((response) => {
        setData(response.data.articles);
      });
  };
  return (
    <>
      <div className="cont1">
        <div className="container-fluid">
          <div className="row">
            {data.map((value) => {
              return (
                <div
                  key={value.id}
                  className="card mt-40px "
                  style={{ width: "18rem" }}
                >
                  <img src={value.urlToImage} className="card-img-top" alt="" />
                  <div className="card-body">
                    <h5 className="card-title">{value.title}</h5>
                    <p className="card-text">{value.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <button className="btn btn-primary" onClick={getNews}>
          fetch news
        </button>
      </div>
    </>
  );
}

export default News;
