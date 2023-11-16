import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import BoxThreeDots from "./assets/svg/BoxThreeDots";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between bg-gray-800 p-4 fixed top-0 z-10 w-full h-16">
      <div className="items-center text-white hover:cursor-pointer" onClick={() => {navigate("/")}}>
        <span className="font-semibold text-xl tracking-tight">
          Writer's Block
        </span>
      </div>

      <div className="items-center justify-end lg:w-auto">
        <div className="relative">
          <button
            className="items-center p-3 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <BoxThreeDots title={"Other Pages"}></BoxThreeDots>
          </button>

          <ul
            id="dropdown-menu"
            className={`absolute mt-1 right-0 w-44 py-2 bg-white rounded-md shadow-lg ${
              isOpen ? "" : "hidden"
            } `}
          >
            <li>
              <a
                onClick={() => {
                  navigate("/");
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:cursor-pointer"
              >
                Home
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/viewBook");
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:cursor-pointer"
              >
                View Book
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/viewStoryChar");
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:cursor-pointer"
              >
                View Character
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/viewPlace");
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:cursor-pointer"
              >
                View Place
              </a>
            </li>
            <li>
              <a
                onClick={() => {
                  navigate("/viewStorySetting");
                  setIsOpen(false);
                }}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:cursor-pointer"
              >
                View Story Setting
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
