import Sidebar from "../Sidebar/Sidebar";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import "./Faq.css";

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
    {
      id: 4,
      question:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui nemo illo maxime dolor vitae? Animi quod deleniti maxime nulla porro iure totam ipsam aperiam facilis vitae quo, ut odit rerum?",
    },
  ];

  return (
    <>
      <div className="ml-14 mt-5">
        <h1 className="pt-2 px-5 text-3xl text-blue-900 py-5">
          Frequently Asked Questions
        </h1>

        <div className="faq-nav-container">
          <div className="faq-items-container ">
            {DropDownList.map((value, key) => {
              return (
                <button
                  type="button"
                  className={`py-2 font-semibold px-6  ${
                    selectedButton === value
                      ? "text-blue-800 border-blue-900"
                      : "bg-transparent text-gray-500"
                  } ${
                    selectedButton === value ? "faq-active" : ""
                  }  w-max-content`}
                  onClick={() => setSelectedButton(value)}
                >
                  {value}
                </button>
              );
            })}
          </div>

          <span className="faq-nav-sub-container">
            <img class="cursor-pointer" src="src\assets\bx_sort.png"></img>
            <img src="src\assets\lucide_filter.png"></img>
          </span>
        </div>

        {selectedButton == "New FAQs" && (
          <div>
            {data.map((qa) => (
              <div key={qa.id}>
                <div className="w-18 flex flex-col flex-wrap  bg-white b mx-4 my-4">
                  <div className="w-100  bg-white flex items-center my-2">
                    <p className=" pb-6 text-2xl font-bold text-blue-800 bg-white mx-5 ">
                      Q:
                    </p>
                    <div className="text-base text-black font-medium h-1/2 my-2 mx-2 bg-white">
                      {qa.question}{" "}
                    </div>
                  </div>
                  <div className="w-90  bg-white flex items-center">
                    <p className="text-2xl font-bold text-blue-800 bg-white mx-5 outline-none ">
                      A:
                    </p>
                    <input
                      className="h-10 my-3 mx-2 py-3 w-3/4 text-decoratio-none"
                      placeholder="Enter the answer here..."
                    />
                    <button className="py-3 px-3 bg-blue-900 rounded-lg text-white font-semibold mx-5 ">
                      Publish
                    </button>
                    <button className="py-3 px-3 bg-blue-900 rounded-lg text-white font-semibold mx-5">
                      Reject
                    </button>
                  </div>
                  <div className="w-90  bg-white flex items-center">
                    <button className=" text-blue-900 cursor-pointer font-semibold hover:underline mx-4 my-2">
                      User Details
                    </button>
                    <button className=" text-blue-900 cursor-pointer font-semibold hover:underline mx-4 my-2">
                      Product Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
        {selectedButton == "Published" && <h2>Published FAQs</h2>}
        {selectedButton == "Rejected" && <h2>Rejected FAQs</h2>}
        {selectedButton == "Processing" && <h2>Processing FAQs</h2>}
      </div>
    </>
  );
}

export default Faq;
