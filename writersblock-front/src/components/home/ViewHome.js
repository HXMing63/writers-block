import React from "react";
import { useNavigate } from "react-router-dom";

const ViewHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <h1 className="text-6xl font-bold text-gray-900 mb-8 hidden sm:block">
        Writer's Block
      </h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-8 hidden sm:block">
        Overcoming writer's block, one word at a time
      </h2>
      <div className="flex flex-row w-full max-w-md space-x-4 mt-8">
        <div
          className="flex-1 bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:cursor-pointer hover:bg-gray-100"
          onClick={() => {navigate("/viewPlace")}}
        >
          <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
            Place
          </h2>
        </div>
        <div
          className="flex-1 bg-white rounded-lg shadow-md p-8 flex flex-col items-center justify-center hover:shadow-2xl hover:cursor-pointer hover:bg-gray-100"
          onClick={() => {navigate("/viewStorySetting")}}
        >
          <h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
            Setting
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ViewHome;
