import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { FloatButton } from "antd";
import { Footer, Navbar } from "./Components";
import { Home, NoPage} from "./Pages";


function App() {
  return (
    <div className="App scroll-smooth bg-gradient-to-r from-[#300034] via-black to-[#300034]">

      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>

      <FloatButton.BackTop />
    </div>
  );
}

export default App;
