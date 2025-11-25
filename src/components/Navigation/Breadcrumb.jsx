import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb({ apiKey }) {
  const location = useLocation();
  const path = location.pathname;
  const navigate = useNavigate();

  return (
    <div>
      <ul className="flex items-center space-x-2 text-sm md:text-base mt-3 mb-0 md:mb-3">

        {/* Home */}
        <li><Link to="/" className="text-stone-400">Home</Link></li>
        <li><IoIosArrowForward className="text-stone-400" /></li>

        {/* Industries */}
        <li className="text-stone-400">Industries</li>
        <li><IoIosArrowForward className="text-stone-400" /></li>

        {/* Tourism */}
        <li>
          <Link
            to="/tourism"
            className={path === "/tourism" ? "text-stone-900" : "text-stone-400"}
          >
            Tourism
          </Link>
        </li>

        {/* Trekking Report */}
        {(path.includes("trekking-reports") || path.includes("data")) && (
          <>
            <li><IoIosArrowForward className="text-stone-400" /></li>
            <li>
              <button
                type="button"
                className={path.includes("trekking-reports") && !path.includes("data")
                  ? "text-stone-900"
                  : "text-stone-400 hover:text-stone-600 text-sm"
                }
                onClick={() => {
                  if (apiKey) {
                    navigate("/tourism/trekking-reports/data", { state: { apiKey } });
                  } else {
                    navigate("/tourism/trekking-reports");
                  }
                }}
              >
                Trekking Report
              </button>
            </li>
          </>
        )}

        {/* Specific Data Page */}
        {path.includes("data") && (
          <>
            <li><IoIosArrowForward className="text-stone-400" /></li>
            <li className="text-stone-900">Trekking Arrival VS Tourist Arrival</li>
          </>
        )}

      </ul>
    </div>
  );
}


export default Breadcrumb;
