import React, { useContext, useRef } from "react";
import SearchContext from "../context/SearchContext";
import { TbX } from "react-icons/tb";

const Navbar = () => {
  let searchRef = useRef();

  let ctx = useContext(SearchContext);
  console.log(ctx);

  const handleSearch = () => {
    let value = searchRef.current.value;
    console.log(value);
    ctx.setsearch(value);
  };
  return (
    <div className="relative">
      <nav className="fixed left-0 top-0 z-50 bg-white w-full flex  justify-between items-center mx-auto px-8 h-20">
        <div className="inline-flex">
          <h1 className="font-bold text-xl">AirNews</h1>
        </div>
        <div className="hidden md:block flex-shrink flex-grow-0 justify-start px-2  mx-auto ">
          <div className="inline-block">
            <div className="inline-flex items-center max-w-full">
              <input
                ref={searchRef}
                type="text"
                placeholder="search a news..."
                className="border-2 outline-none rounded-md py-2 px-3 border-gray-400"
              />
              <button
                onClick={handleSearch}
                className="bg-green-800 text-white hover:text-black px-4 py-2 rounded-md hover:bg-green-500 mx-2"
              >
                search
              </button>
            </div>
          </div>
        </div>

        <div className="ms-auto md:block hidden">
          <ul className="flex gap-4">
            <li
              onClick={() => ctx.setsearch("Crime")}
              className="font-bold cursor-pointer"
            >
              Crime
            </li>
            <li
              onClick={() => ctx.setsearch("Finance")}
              className="font-bold cursor-pointer"
            >
              Finance
            </li>
            <li
              onClick={() => ctx.setsearch("Sport")}
              className="font-bold cursor-pointer"
            >
              Sport
            </li>
            <li
              onClick={() => ctx.setsearch("Entertainment")}
              className="font-bold cursor-pointer"
            >
              Entertainment
            </li>
          </ul>
        </div>
        <div className="flex-initial">
          <div className="flex justify-end items-center relative">
            <div className=" md:hidden block relative bg-red-400">
              <div className="inline relative">
                <button
                  type="button"
                  data-collapse-toggle="show"
                  className="inline-flex items-center relative px-2 border rounded-full hover:shadow-lg"
                >
                  <div className="pl-1">
                    <svg
                      viewBox="0 0 32 32"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                      role="presentation"
                      focusable="false"
                      style={{
                        display: "block",
                        fill: "none",
                        height: 16,
                        width: 16,
                        stroke: "currentcolor",
                        strokeWidth: 3,
                        overflow: "visible",
                      }}
                    >
                      <g fill="none" fillRule="nonzero">
                        <path d="m2 16h28" />
                        <path d="m2 24h28" />
                        <path d="m2 8h28" />
                      </g>
                    </svg>
                  </div>
                </button>
              </div>

 <div className="absolute hidden top-full bg-green-400" id="show">

 <div className="inline-flex items-center max-w-full">
              <input
                ref={searchRef}
                type="text"
                placeholder="search a news..."
                className="border-2 outline-none rounded-md py-2 px-3 border-gray-400"
              />
              <button
                onClick={handleSearch}
                className="bg-green-800 text-white hover:text-black px-4 py-2 rounded-md hover:bg-green-500 mx-2"
              >
                search
              </button>
            </div>
               
            <ul className="flex gap-4">
            <li
              onClick={() => ctx.setsearch("Crime")}
              className="font-bold cursor-pointer"
            >
              Crime
            </li>
            <li
              onClick={() => ctx.setsearch("Finance")}
              className="font-bold cursor-pointer"
            >
              Finance
            </li>
            <li
              onClick={() => ctx.setsearch("Sport")}
              className="font-bold cursor-pointer"
            >
              Sport
            </li>
            <li
              onClick={() => ctx.setsearch("Entertainment")}
              className="font-bold cursor-pointer"
            >
              Entertainment
            </li>
          </ul>
              </div>
  
            </div>
          </div>
        </div>
      </nav>
{/* ***************************************************** */}
      <div className="absolute  left-0   hidden top-full bg-green-400" id="show">

<div className="inline-flex items-center max-w-full">
             <input
               ref={searchRef}
               type="text"
               placeholder="search a news..."
               className="border-2 outline-none rounded-md py-2 px-3 border-gray-400"
             />
             <button
               onClick={handleSearch}
               className="bg-green-800 text-white hover:text-black px-4 py-2 rounded-md hover:bg-green-500 mx-2"
             >
               search
             </button>
           </div>
              
           <ul className="flex gap-4">
           <li
             onClick={() => ctx.setsearch("Crime")}
             className="font-bold cursor-pointer"
           >
             Crime
           </li>
           <li
             onClick={() => ctx.setsearch("Finance")}
             className="font-bold cursor-pointer"
           >
             Finance
           </li>
           <li
             onClick={() => ctx.setsearch("Sport")}
             className="font-bold cursor-pointer"
           >
             Sport
           </li>
           <li
             onClick={() => ctx.setsearch("Entertainment")}
             className="font-bold cursor-pointer"
           >
             Entertainment
           </li>
         </ul>
             </div>


    </div>
  );
};

export default Navbar;
