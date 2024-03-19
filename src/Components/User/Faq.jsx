import Sidebar from "../Sidebar/Sidebar";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import "./Faq1.css";
import Faq1 from "./Faq1";

import React, { useMemo, useState } from "react";
import Table from "../Re-use/Table";

function Faq() {
  const DropDownList = ["New FAQs", "Published", "Processing", "Rejected"];
  const [selectedButton, setSelectedButton] = useState(DropDownList[0]);

  const data = [
    {
      id: 1,
      question:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo illo maxime dolor vitae? Animi quod deleniti maxime nulla porro iure totam ipsam aperiam facilis vitae quo, ut odit rerum?",
    },
    {
      id: 2,
      question:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo illo maxime dolor vitae? Animi quod deleniti maxime nulla porro iure totam ipsam aperiam facilis vitae quo, ut odit rerum?",
    },
    {
      id: 3,
      question:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo illo maxime dolor vitae? Animi quod deleniti maxime nulla porro iure totam ipsam aperiam facilis vitae quo, ut odit rerum?",
    },
  ];

  return (
    <>
      <div className="ml-14 mt-5">
        <h1 className="pt-2 px-5 text-3xl text-blue-900 py-2">
          Frequently Asked Questions
        </h1>

        <div className=" ">
          <div className="">
            {DropDownList.map((value, key) => {
              return (
                <div key={key} className="relative inline-block">
                  <button
                    type="button"
                    className={`py-2 font-semibold px-6 ${
                      selectedButton === value
                        ? "text-blue-800 border-blue-900"
                        : "bg-transparent text-gray-500"
                    }`}
                    onClick={() => setSelectedButton(value)}
                  >
                    {value}
                  </button>
                  {selectedButton === value && (
                    <hr
                      className="absolute mx-6 border-t-2 border-blue-900"
                      style={{ width: `${value.length}ch`, bottom: "-2px" }}
                    />
                  )}
                </div>
              );
            })}
          </div>

          <div className="">
            <hr className="" />
            <h2 className="text-2xl leading-10 font-semibold text-blue-800 mx-4 my-4 py-2">
              Product Question and Answers
            </h2>
          </div>
        </div>
        <div>
          {data.map((qa) => (
            <div key={qa.id}>
              <div className="w-18 flex flex-col flex-wrap  bg-white b mx-4 my-4">
                <div className="w-100  bg-white flex items-center my-2">
                  <p className=" pb-6 text-2xl font-bold text-blue-800 bg-white mx-5 ">
                    Q:
                  </p>
                  <div className="text-base text-black font-medium h-1/2 my-4 mx-1 bg-white">
                    {qa.question}{" "}
                  </div>
                </div>
                <div className="w-90  bg-white flex items-center">
                  <p className="text-2xl font-bold text-blue-800 bg-white mx-5 outline-none ">
                    A:
                  </p>
                  <input
                    className="h-10 my-3 mx-2 py-3 w-3/4 "
                    placeholder="Enter the answer here..."
                  />
                  <button className="Btn">Publish</button>
                  <button className="Btn">Reject</button>
                </div>
                <div className="w-90  bg-white flex items-center">
                  <button className="userBtn">User Details</button>
                  <button className="userBtn">Product Details</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Faq;
