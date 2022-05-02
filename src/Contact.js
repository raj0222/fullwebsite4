import React, { useState } from "react";
import "./App.css";
const Contact = () => {
  const [user, setUser] = useState({
    name: "",
    Mobile: "",
    Email: "",
    Password: "",
    Address: "",
    Address2: " ",
  });
  let name, value;
  const getUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUser({ ...user, [name]: value });
  };
  const postData = async (e) => {
    e.preventDefault();
    const { name, Mobile, Email, Password, Address, Address2 } = user;

    const res = await fetch(
      "https://fullwebsite4-default-rtdb.firebaseio.com/contactform.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          Mobile,
          Email,
          Password,
          Address,
          Address2,
        }),
      }
    );
    alert("successfully submitted");
  };
  return (
    <>
      <div className="cont">
        <form className="row g-3" method="post">
          <div className="col-md-6 ">
            <label for="inputEmail4" className="form-label">
              name
            </label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={user.name}
              onChange={getUserData}
            />
          </div>
          <div className="col-md-6">
            <label for="inputnumber" className="form-label">
              Mobile Number
            </label>
            <input
              type="text"
              className="form-control"
              name="Mobile"
              value={user.Mobile}
              onChange={getUserData}
            />
          </div>
          <div className="col-md-6">
            <label for="inputEmail4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              name="Email"
              value={user.Email}
              onChange={getUserData}
            />
          </div>
          <div className="col-md-6">
            <label for="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              name="Password"
              value={user.Password}
              onChange={getUserData}
            />
          </div>
          <div className="col-12">
            <label for="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              name="Address"
              placeholder="1234 Main St"
              value={user.Address}
              onChange={getUserData}
            />
          </div>
          <div className="col-12">
            <label for="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              name="Address2"
              placeholder="Apartment, studio, or floor"
              value={user.Address2}
              onChange={getUserData}
            />
          </div>
          <div className="col-12">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={postData}
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </>
  );
};
export default Contact;
