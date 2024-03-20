import React from "react";
import "./Form.css";

const Reseller = () => {
  return (
    <div>
      <div className="form-container">
        <div className="header">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 500 500"
            >
              <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
            </svg>
          </div>
          <h2 className="header-heading">Become An Reseller / Distributer</h2>
        </div>
        <div className="main-container">
          <div className="first-container">
            <div className="input">
              Select Role
              <select className="sub-input" placeholder="Select Role">
                <option value="" disabled selected hidden>
                  Select Role
                </option>
                <option value="usa">1</option>
                <option value="uk">2</option>
                <option value="canada">3</option>
                <option value="australia">4</option>
              </select>
              <br></br>
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
        </div>
      </div>
      <h1 className="upload-h">Upload Documents and Images</h1>
      <h2 className="upload-sh">Upload the required documents and Images</h2>
      <div className="box">
        <div className="box1">
          <div className="box2">
            Upload or drag and drop the images and documents
          </div>
          <button className="submit-1">Upload</button>
        </div>
        <div className="box1">
          <div className="box2">
            Upload or drag and drop the images and documents
          </div>
          <button className="submit-1">Upload</button>
        </div>
        <div className="box1">
          <div className="box2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 512 512"
            >
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" />
            </svg>
            <h4>Add More</h4>
          </div>
          <button className="submit-1">Upload</button>
        </div>

        <button className="submit">Send Request</button>
      </div>
    </div>
  );
};

export default Reseller;
