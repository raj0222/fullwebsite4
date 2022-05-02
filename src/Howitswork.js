import React, { useState } from "react";
import WorkApi from "./Api/WorkApi";
import "./index.css";

function Howitswork() {
  const [workData, setWorkData] = useState(WorkApi);
  return (
    <>
      <section>
        <div
          data-aos="fade-right"
          className=" work-container container text-center my-5"
        >
          <h2>SERVICES</h2>
          <h4>What we offer</h4>
          <br />
          <div className=" row kush">
            {workData.map((value, index) => {
              return (
                <>
                  {
                    <div key={index} className="a-container col-md-4">
                      <img src={value.imgsrc} alt="raj" />

                      <h4>{value.title}</h4>
                      <p>{value.info}</p>
                    </div>
                  }
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}

export default Howitswork;
