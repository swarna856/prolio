import React from "react";
import "./Form.css";

const Service = () => {
  return (
    <div className="form-container1">
      <div className="header">
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1em"
            viewBox="0 0 512 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </div>
        <h2 className="header-heading">Become A Service Center</h2>
      </div>
      <div className="main-container">
        <div className="first-container">
          <div className="input">
            Select Role
            <input
              type="text"
              className="sub-input"
              placeholder="Reseller"
            ></input>
          </div>
          <div className="input">
            Name
            <input
              type="text"
              className="sub-input"
              placeholder="Enter Last Name"
            ></input>
          </div>
        </div>
        <div className="first-container">
          <div className="input">
            Mobile Number
            <input
              type="numbers"
              className="sub-input"
              placeholder="Enter Mobile Number"
            ></input>
          </div>
          <div className="input">
            Email
            <input
              type="text"
              className="sub-input"
              placeholder="Enter Email"
            ></input>
          </div>
        </div>
        <div className="long-input">
          Address
          <input
            type="text"
            className="sub-input"
            placeholder="Enter Address"
          ></input>
        </div>
        <div className="long-input">
          Years of Experience
          <input
            type="text"
            className="sub-input"
            placeholder="Experience in This Field"
          ></input>
        </div>
        <div className="long-input">
          Product Dealt With
          <input
            type="text"
            className="sub-input"
            placeholder="Experience in This Field"
          ></input>
        </div>
        <div className="long-input">
          Product Dealt With
          <input
            type="text"
            className="sub-input"
            placeholder="Experience in This Field"
          ></input>
        </div>
      </div>
    </div>
  );
};

export default Service;
