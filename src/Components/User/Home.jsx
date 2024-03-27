import React from "react";
import SimpleNavbar from "../Navbar/SimpleNavbar";
import Sidebar from "../Sidebar/Sidebar";
import Faq from "./Faq";
import Dashboard from "./Product";
import { Route, Routes } from "react-router-dom";
import Reseller from "../Forms/Reseller";
import Product from "./Product";

function Home() {
  return (
    <>
      <SimpleNavbar />
      <div className="mt-16 flex ">
        <div className="w-[230px] ">
          <Sidebar />
        </div>
        <div className="w-full h-screen">
          <Routes>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/product" element={<Product />}></Route>
            {/* <Route path="/opportunities" element={<Opportunities />}></Route> */}
            {/* <Route path="/wishlist" element={<Reseller/>} /> */}
          </Routes>
        </div>
      </div>
    </>
  );
}

export default Home;
