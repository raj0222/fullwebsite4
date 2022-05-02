import React from 'react'

function CarrdCommon() {
  return (
    <section>
    <div className="card-group">
      <div data-aos="fade-left" className="card cards m-5 g-5">
        <img
          src="https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a8fe4b032e338f13897.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">chandigarh</h5>
          <p className="card-text"> from 1489rs</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="card cards m-5 g-5 ">
        <img
          src="https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a83e4b032e338f11b77.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">jaipur</h5>
          <p className="card-text">from 1640rs</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
      <div data-aos="fade-left" className="card cards m-5 ">
        <img
          src="https://images.ixigo.com/node_image/f_auto,t_medium/entityId/503b2a78e4b032e338f10051.jpg"
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">luchnow</h5>
          <p className="card-text">from 1560rs</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      </div>
    </div>
  </section>
  )
}

export default CarrdCommon