import Nav from "./components/Nav";
import starImage from "./assets/star.png";
import mainImage from "./assets/Rec3.png";

function App() {
  return (
    <div className="bg-cover bg-no-repeat bg-center h-screen bg-rec">
      <div className="max-w-7xl h-full px-8 py-12 mx-auto  sm:px-12 md:px-16 lg:px-24 sm:py-14 md:py-20  ">
        <div className="flex flex-col justify-between rounded-[3rem] h-full px-6 py-2 bg-cyan-200">
          <Nav />
          <CardImage />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
const CardImage = () => {
  return (
    <div className="h-full w-full flex flex-col md:flex-row items-center justify-between gap-3">
      <div className="h-20 mx-auto px-12  bg-black"></div>

      <div className="relative overflow-hidden rounded-[2rem] bg-center max-w-[45rem] h-full max-h-[32rem]">
        <img
          className="object-cover w-full h-full  "
          src={mainImage}
          alt="main-image"
        />
      </div>

      <div className="h-11 mx-auto px-12  bg-black"></div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="w-full relative bg-cyan-50 h-20">
      <div className="flex md:absolute bottom-10 w-full justify-between">
        <div className="flex justify-between gap-3">
          <div className=" w-24 mx-auto">
            <img src={starImage} alt="star" />
          </div>
          <div className="text-xl flex-row  justify-between gap-2">
            <div className="p-2 border">Satisfy Your Eyes</div>
            <div className="p-2 border">Satisfy Your Eyes</div>
          </div>
        </div>
        <Download />
      </div>
    </div>
  );
};

const Download = () => {
  return (
    <div className=" flex-row">
      <button className="bg-blue-500 py-1 px-5 rounded-lg text-lg">
        Download
      </button>
      <span className="text-left">
        <p>Number of downloads:</p>
        <p className="text-xl font-bold"> 340M+</p>
      </span>
    </div>
  );
};
