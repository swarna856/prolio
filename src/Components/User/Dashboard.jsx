import Sidebar from "../Sidebar/Sidebar";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import CommonNavBar from "../Navbar/CommonNavBar";

import React, { useState } from "react";

function Dashboard() {
  const DropDownList = [
    "All Products",
    "My Products",
    "Remove Products",
    "Draft",
  ];
  const [selectedButton, setSelectedButton] = useState(DropDownList[0]);

  const data = [
    {
      id: 1,
      Image:
        "data:image/jpeg;base64,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",
      Title: "Casual Shirts",
      Company: "By Anish Industries",
      Price: "₹3000",
    },
    {
      id: 2,
      Image:
        "data:image/jpeg;base64,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",
      Title: "Speakers",
      Company: "By Anish Industries",
      Price: "₹4000",
    },
    {
      id: 3,
      Image:
        "data:image/jpeg;base64,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",
      Title: "Stainless Steel Box",
      Company: "By Anish Industries",
      Price: "₹5000",
    },
    {
      id: 4,
      Image:
        "data:image/jpeg;base64,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",
      Title: "Camera",
      Company: "By Anish Industries",
      Price: " ₹1000",
    },
  ];

  return (
    <>
      <Sidebar />
      <SimpleNavbar />
      {/* <CommonNavBar /> */}
      <div className="ml-14 mt-5">
        <div className="flex items-center justify-between py-3">
          <h1 className="pt-2 px-5 text-4xl text-blue-900 py-4 font-semibold">
            Products
          </h1>
          <button className="py-4 px-4 bg-blue-900 rounded-lg text-white font-semibold mx-5">
            Add Products
          </button>
        </div>

        <div className="text-1xl">
          {DropDownList.map((value, key) => (
            <div key={key} className="relative inline-block bg-transparent">
              <button
                type="button"
                className={`py-3 font-semibold px-6 ${
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
          ))}
        </div>
        <hr className="my-5 w-5/6" />
        {selectedButton === "All Products" && (
          <div className="w-90 h-screen bg-white my-6 mx-4">
            <div className="flex items-center justify-between bg-transparent">
              <h1 className="bg-transparent text-3xl font-semibold font-serif my-3 mx-3 py-3">
                Trending Products
              </h1>
              <span className="bg-transparent text-blue-800 font-semibold underline text-xl cursor-pointer mx-3">
                View all
              </span>
            </div>
            <div className="grid grid-cols-1 bg-transparent md:grid-cols-3 gap-6 mx-6">
              {data.map((product) => (
                <div
                  key={product.id}
                  className="mt-5 bg-transparent w-5/6 min-h-[15rem] rounded-lg shadow-xl cursor-pointer overflow-hidden mx-6"
                >
                  <img
                    className="w-full h-[200px] object-center object-fill"
                    src={product.Image}
                    alt={product.Image}
                  />
                  <div className="p-5 flex-col gap-3">
                    <h1 className="font-bold text-ig text-black overflow-hidden overflow-ellipsis">
                      {product.Title}
                    </h1>
                    <div className="pt-3 text-blue-950 font-semibold">
                      <span className="text-lg block">
                        By {product.Company}
                      </span>
                      <p className="mt-2 font-bold">Price: {product.Price}</p>
                    </div>
                    <div className="w-full pt-3">
                      <button className="bg-blue-900 h-10 rounded-xl text-white font-semibold w-full">
                        Send Enquiry
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        {selectedButton === "My Products" && <h2>My Products</h2>}
        {selectedButton === "Remove Products" && <h2>Remove Products</h2>}
        {selectedButton === "Draft" && <h2>Draft</h2>}
      </div>
    </>
  );
}

export default Dashboard;
