import React from 'react'
import { CiSearch } from "react-icons/ci";
export const Data = () => {
  return (
  
    <>
        
            <div className="flex flex-col md:flex-row md:items-center md:justify-between p-4">
                {/* Heading */}
                <div>
                    <h3 className="font-bold text-[25px] ml-[5px]">Trekking Arrivals VS Tourist Arrival</h3>
                   
                </div>

                {/* Search Bar */}
                <div className="relative w-full md:w-1/3 mt-3 md:mt-0">
                    <input
                        type="text"
                        placeholder="Looking for something specific?"
                        className="w-full px-4 pr-10 py-2 border rounded-full bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-600"
                    />
                    <CiSearch
                        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                    />
                </div>
            </div>
    </>
  )
}
export default Data