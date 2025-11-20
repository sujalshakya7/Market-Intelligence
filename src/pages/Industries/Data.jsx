
import TourismChart from "./Tourism/TourismChart";
import { useLocation } from "react-router-dom";
import { RxCross1 } from "react-icons/rx";
import { IoIosArrowForward } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import GearChart from "./Tourism/GearChart";
import NewsChart from "./Tourism/NewsChart";

// import OtherData1 from "./OtherData1";   // for apiKey = 3
// import OtherData2 from "./OtherData2";   // for apiKey = 4

const Data = () => {
  const location = useLocation();
  const apiKey = location.state?.apiKey;

  return (
    <div>
     
      {/* <h1>Tourism VS Trekking</h1> */}
      {apiKey === 2 && <TourismChart />}
       {apiKey === 3 && <GearChart />}
      {apiKey === 4 && <NewsChart />} 
    </div>
  );
};

export default Data;


