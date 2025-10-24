import React from "react";
import { MdTravelExplore } from "react-icons/md";
const Industries = () => {
  return (
    <div className="wrapper h-lvh font-general-sans">
      <h1 className="pt-[10rem] text-6xl mt-2 text-neutral font-medium">
        Explore Industries
      </h1>
      <div className="py-10  flex-wrap gap-5 grid grid-cols-4">
        <div className="bg-primary/10 py-10 px-10 rounded-md text-2xl flex gap-5 items-center justify-between ">
          {" "}
          <MdTravelExplore className=" w-15 h-15 border-2 border-primary text-primary bg-primary/20  px-2 py-2 rounded-md  " />{" "}
          <p className=" font-medium text-3xl text-primary">
            Travel & <br></br> Tourism
          </p>
        </div>{" "}
        
      </div>
    </div>
  );
};

export default Industries;
