import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb() {
  return (
    <div className="xs:mt-5 md:mt-10">
      <ul className="flex items-center space-x-2 text-sm md:text-base mt-3 mb-0 md:mb-3">
        <li><Link to="/" className="text-stone-400">Home</Link></li>
        <li><IoIosArrowForward className="text-stone-400" /></li>

        <li className="text-stone-400">Industries</li>
        <li><IoIosArrowForward className="text-stone-400" /></li>

        <li className="text-stone-400">Tourism</li>
        <li><IoIosArrowForward className="" /></li>

        <li className="text-stone-900">Trekking Industry Report</li>
      </ul>
    </div>
  );
}

export default Breadcrumb;
