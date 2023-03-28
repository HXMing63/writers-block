import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between flex-wrap bg-gray-800 p-4">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <span className="font-semibold text-xl tracking-tight">
          Writer's Block
        </span>
      </div>

      <div className="flex items-center justify-end flex-1 lg:w-auto">
        <div className="relative">
          <button
            className="flex items-center px-3 py-2 border rounded text-gray-400 border-gray-400 hover:text-white hover:border-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Other Pages</title>
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4zM2 12a2 2 0 100-4 2 2 0 000 4zM18 12a2 2 0 100-4 2 2 0 000 4z" />
            </svg>
          </button>

          <ul
            id="dropdown-menu"
            className={`absolute mt-1 right-0 z-50 w-40 py-2 bg-white rounded-md shadow-lg ${
              isOpen ? "" : "hidden"
            } `}
          >
            <li>
              <a
                onClick={() => navigate("/viewPlace")}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 hover:cursor-pointer"
              >
                View Place
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Option 2
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
              >
                Option 3
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
