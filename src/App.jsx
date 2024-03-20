import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Faq from "./Components/User/Faq";
// import Faq1 from "./Components/User/Faq1";
import "./App.css";
import Home from "./Components/User/Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
