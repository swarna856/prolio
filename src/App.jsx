import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./Components/User/Faq";
// import Faq1 from "./Components/User/Faq1";
import "./App.css";
import Home from "./Components/User/Home";
import Reseller from "./Components/Forms/Reseller";
import Service from "./Components/Forms/Service";
import Supplier from "./Components/Forms/Supplier";
import Review from "./Components/User/Review";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />}></Route>
          <Route path="/reseller" element={<Reseller />}></Route>
          <Route path="/service" element={<Service />}></Route>
          <Route path="/supplier" element={<Supplier />}></Route>
          <Route path="/review" element={<Review />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
