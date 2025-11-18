
import TourismChart from "./Tourism/TourismChart";



import { useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";

// import OtherData1 from "./OtherData1";   // for apiKey = 3
// import OtherData2 from "./OtherData2";   // for apiKey = 4

const Data = () => {
  const location = useLocation();
  const apiKey = location.state?.apiKey;

  return (
    <div>
      {/* <ul className="flex items-center space-x-2 text-sm md:text-base mt-3 mb-0 md:mb-3">
        <li><Link to="/" className="text-stone-400">Home</Link></li>
        <li><IoIosArrowForward /></li>
        <li><Link to="/industries" className="text-stone-400">Industries</Link></li>
        <li><IoIosArrowForward /></li>
        <li className="text-stone-400">Tourism</li>
        <li><IoIosArrowForward /></li>
        <li className="text-stone-900">Trekking Industry Report</li>
      </ul> */}
      {/* <h1>Tourism VS Trekking</h1> */}
      {apiKey === 2 && <TourismChart />}
      {/* {apiKey === 3 && <OtherData1 />}
      {apiKey === 4 && <OtherData2 />} */}
    </div>
  );
};

export default Data;


