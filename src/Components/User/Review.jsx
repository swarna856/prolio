import React from "react";
import { useState, useEffect } from "react";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import CloseIcon from "@mui/icons-material/Close";

const Review = () => {
  const DropDownList1 = [
    "Product Details",
    "Social Media Handles",
    "Buniess Boosters",
    "Pricing",
    "Reviews",
  ];

  const [selectedButton1, setSelectedButton1] = useState(DropDownList1[0]);
  return (
    <div>
      <SimpleNavbar />
      <div className="mt-16 flex ">
        <div className="w-3/4 h-300  flex  mx-64 mt-48">
          <div>
            <div className="w-full h-24  mx-2 bg-white ">
              <h1 className="text-2xl text-blue-900 font-semibold ml-4 bg-white mt-2 ">
                Preview Products
              </h1>
              <h1 className="text-xl text-slate-400 font-semibold ml-4  bg-white mt-2 ">
                Preview Products and get more insights
              </h1>
            </div>
            <div className="w-full lg:w-98 h-200 border border-soild mb-2 mx-2 flex shadow-md bg-white">
              <div className="w-1/2 h-150 bg-white my-2 ">
                <div className="w-4/5 h-2/4 py-12 bg-yellow-500 mx-16 my-6"></div>
                <div className="w-11/12 h-1/3 mx-8 flex justify-between bg-white">
                  <div className="w-4/5 h-3/5 bg-yellow-500 mx-2 my-6"></div>
                  <div className="w-4/5 h-3/5 bg-yellow-500 mx-2 my-6"></div>
                  <div className="w-4/5 h-3/5 bg-yellow-500 mx-2 my-6"></div>
                </div>
              </div>
              <div className="w-1/2 h-4/5 bg-white mx-2 my-2 ">
                <h1 className="text-3xl text-black font-semibold mx-8 my-2 bg-white">
                  Casual Shirt
                </h1>
                <h2 className="text-xl text-blue-900 font-semibold mx-8 my-4 bg-white">
                  By Arrow
                </h2>
                <h2 className="text-grey-100  my-6 mx-8 text-xl bg-white">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Veniam, quod. Molestiae, quo molestias ipsum suscipit
                  similique placeat beatae nam culpa recusandae. Officiis eum ex
                  harum ea inventore dolorem, consequatur cumque.
                </h2>
                <h1 className="text-blue-900 text-2xl font-semibold mx-8 bg-white">
                  PRICE: ₹ 72/peice
                </h1>
                <h2 className="text-xl text-black font-semibold mx-8 my-4 bg-white">
                  Variations :
                </h2>
                <h2 className=" text-slate-500 font-semibold mx-8 my-4 bg-white">
                  Total Options :
                </h2>
                <div className="flex bg-white">
                  <h2 className="text-xl text-black font-semibold mx-8 my-4 bg-white">
                    Colors:
                  </h2>
                  <h2 className="text-xl text-black font-semibold mx-64 my-4 bg-white">
                    Sizes :
                  </h2>
                </div>
                <div className="flex bg-white">
                  <div className="w-1/2 h-11/12 bg-white mx-8 shadow-md rounded-lg">
                    <button className="rounded-full bg-red-400 w-12 h-12  ml-2 mt-2"></button>
                    <button className="rounded-full bg-green-400 w-12 h-12  ml-2 mt-2"></button>
                    <button className="rounded-full bg-blue-400 w-12 h-12  ml-2 mt-2"></button>
                    <button className="rounded-full bg-yellow-400 w-12 h-12  ml-2 mt-2"></button>
                    <button className="rounded-full bg-black w-12 h-12  ml-2 mt-2"></button>
                    <button className="rounded-full bg-purple-400 w-12 h-12  ml-2 mt-2"></button>
                  </div>
                  <div className="w-1/2 h-40 bg-white mx-8 shadow-md rounded-lg ">
                    <button className="rounded-full bg-blue-50 w-12 h-12 ml-4 mt-2 font-semibold">
                      XS
                    </button>
                    <button className="rounded-full bg-blue-50 w-12 h-12 ml-4 mt-2 font-semibold">
                      S
                    </button>
                    <button className="rounded-full bg-blue-50 w-12 h-12 ml-4 mt-2 font-semibold">
                      L
                    </button>
                    <button className="rounded-full bg-blue-50 w-12 h-12 ml-4 mt-2 font-semibold">
                      XL
                    </button>
                  </div>
                </div>
                <button className="text-xl font-semibold py-4 w-11/12 bg-blue-50 mx-8 my-10 rounded-lg border border-solid border-black">
                  Send Enquiry
                </button>
              </div>
            </div>
            <div className="h-max w-full mx-2 shadow-md transition-all duration-2000 ease-in-out">
              <style>
                {`
                     .button-transition {
                      transition: background-color 0.8s ease-in-out;
                }
                `}
              </style>
              <div className="text-xl border-2 border-solid border-slate-400 rounded-lg mx-8">
                {DropDownList1.map((value, key) => (
                  <div
                    key={key}
                    className="relative inline-block bg-transparent px-6 "
                  >
                    <button
                      type="button"
                      className={`py-3 font-semibold px-6 ${
                        selectedButton1 === value
                          ? "text-white bg-blue-900 button-transition"
                          : "bg-transparent text-gray-500"
                      }`}
                      onClick={() => setSelectedButton1(value)}
                    >
                      {value}
                    </button>
                    {selectedButton1 === value && (
                      <hr className="absolute mx-6 border-t-2 bg-blue-900" />
                    )}
                  </div>
                ))}
              </div>
              {selectedButton1 === "Product Details" && (
                <div className="">
                  <h2 className="text-xl font-semibold ml-8 mt-6 ">
                    Product Name:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Brand Name:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Product ID:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Description:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Key Features:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Product Specifications:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">Importer:</h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">Warranty:</h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Speciality/Uniqueness:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6 pb-6">
                    Benefits:
                  </h2>
                </div>
              )}
              {selectedButton1 === "Social Media Handles" && (
                <div>
                  <h2 className="text-xl font-semibold ml-8 mt-6">Twitter:</h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">Facebook:</h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Instagram:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6 pb-6">
                    YouTube:
                  </h2>
                </div>
              )}
              {selectedButton1 === "Buniess Boosters" && (
                <div>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Prospective Customer Domains:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Green Aspects:
                  </h2>
                  <h2 className="text-xl font-semibold ml-8 mt-6 pb-6">
                    Buiness Oppurtunities:
                  </h2>
                </div>
              )}
              {selectedButton1 === "Pricing" && (
                <div>
                  <h2 className="text-xl font-semibold ml-8 mt-6">
                    Product Pricing:
                  </h2>
                  <h2 className="text-xl font-semibold ml-16 mt-6">
                    Quatity Pricing:
                  </h2>
                  <h2 className="text-xl font-semibold ml-16 mt-6">
                    Quatity Pricing:
                  </h2>
                  <h2 className="text-xl font-semibold ml-16 mt-6">
                    Quatity Pricing:
                  </h2>
                </div>
              )}
              {selectedButton1 === "Reviews" && (
                <div>
                  <h2 className="text-xl font-semibold ml-8 mt-6 pb-6">
                    No Reviews.
                  </h2>
                </div>
              )}
            </div>
            <div className="h-1/6 w-full mx-2 px-18 my-4  bg-white shadow-md">
              <h1 className=" text-xl font-semibold mx-10 my-4 bg-white">
                Products Buying Guide
              </h1>
              <div className="flex my-2">
                <h1 className=" text-xl font-semibold px-4 mx-6 bg-white">
                  Tip 1:
                </h1>
                <h3 className="font-xl font-serif bg-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  consequatur earum minus vel voluptatem? Animi aperiam, id
                  iusto aliquam officiis porro
                </h3>
              </div>
              <div className="flex">
                <h1 className=" text-xl font-semibold px-4 mx-6  bg-white">
                  Tip 2:
                </h1>
                <h3 className="font-xl font-serif bg-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  consequatur earum minus vel voluptatem? Animi aperiam, id
                  iusto aliquam officiis porro
                </h3>
              </div>
              <input
                className="w-11/12 h-10 mx-10 rounded-lg my-4 bg-white border border-solid border-slate-400"
                type="text"
                placeholder="Add tips about the product to offer more information to the users"
              ></input>
            </div>
            <div className="w-full h-max bg-white mx-2 flex">
              <div className="w-2/5 h-1/2 bg-white mx-2 shadow-md ">
                <h1 className="font-semibold text-2xl mx-4 my-2 bg-white">
                  Oppurtunities
                </h1>
                <div className="w-11/12 h-24 border border-solid border-blue-900 mx-4 my-4 rounded-xl bg-white flex">
                  <h2 className="font-semibold text-xl mx-8 my-8 bg-white">
                    Become an authorized speacilist
                  </h2>
                  <button className="bg-blue-900  text-white font-semibold my-4 px-8 rounded-lg ">
                    Apply
                  </button>
                </div>
                <div className="w-11/12 h-24 border border-solid border-blue-900 mx-4 my-4 rounded-xl bg-white flex">
                  <h2 className="font-semibold text-xl mx-8 my-8 bg-white">
                    Become an authorized speacilist
                  </h2>
                  <button className="bg-blue-900  text-white font-semibold my-4 px-8 rounded-lg ">
                    Apply
                  </button>
                </div>
                <div className="w-11/12 h-24 border border-solid border-blue-900 mx-4 my-4 rounded-xl bg-white flex">
                  <h2 className="font-semibold text-xl mx-8 my-8 bg-white">
                    Become an authorized speacilist
                  </h2>
                  <button className="bg-blue-900  text-white font-semibold my-4 px-8 rounded-lg ">
                    Apply
                  </button>
                </div>
              </div>
              <hr />
              <div className="w-3/5 h-96 bg-white mx-2 overflow-scroll shadow-md  ">
                <div className="flex bg-white">
                  <h2 className="font-semibold text-2xl ml-2 my-2 bg-white">
                    Product answers and questions
                  </h2>
                  <input
                    className="w-2/5 h-10 ml-6 rounded-lg my-2 bg-white border border-solid border-slate-400"
                    type="text"
                    placeholder="Search"
                  ></input>
                  <button className="ml-6">
                    <CloseIcon className="h-16 w-16 bg-white " />
                  </button>
                </div>
                <div className="flex my-4 bg-white">
                  <h2 className="ml-8 bg-white">
                    Didn't get the right answer you were looking for?
                  </h2>
                  <button className="ml-48 bg-blue-900 px-4 py-2 text-white rounded-lg">
                    Post Question
                  </button>
                </div>
                <div>
                  <h2 className="pl-8 bg-white">
                    Q:Loremipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur officia consequuntur recusandae rem consequatur?
                  </h2>
                  <h2 className="pl-8 pb-2 bg-white">
                    A:Loremipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur officia consequuntur recusandae rem consequatur?
                  </h2>
                  <h6 className="pl-8 text-slate-600 bg-white">
                    Certified Seller
                  </h6>
                </div>
                <hr />
                <div>
                  <h2 className="pl-8 bg-white">
                    Q:Loremipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur officia consequuntur recusandae rem consequatur?
                  </h2>
                  <h2 className="pl-8 pb-2 bg-white">
                    A:Loremipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur officia consequuntur recusandae rem consequatur?
                  </h2>
                  <h6 className="pl-8 text-slate-600 bg-white">
                    Certified Seller
                  </h6>
                </div>

                <hr />
                <div>
                  <h2 className="pl-8 bg-white">
                    Q:Loremipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur officia consequuntur recusandae rem consequatur?
                  </h2>
                  <h2 className="pl-8 pb-2 bg-white">
                    A:Loremipsum dolor sit, amet consectetur adipisicing elit.
                    Tenetur officia consequuntur recusandae rem consequatur?
                  </h2>
                  <h6 className="pl-8 text-slate-600 bg-white">
                    Certified Seller
                  </h6>
                </div>
                <hr />
              </div>
            </div>
            <div className="w-11/12 h-20  ml-12 flex justify-around mt-4">
              <button className="border border-soild border-black rounded-lg py-4 px-24  font-semibold my-2 bg-white text-black mr-96 text-xl ">
                Back
              </button>
              <button className="ml-96 border-none rounded-lg py-4 px-24  font-semibold my-2  bg-blue-900 text-white text-xl">
                Save and Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
