import React from "react";
import { useNavigate } from "react-router-dom";

const ViewHome = () => {
	const navigate = useNavigate();
	return (
		<div className="bg-gray-100 h-full">
			<div className="flex flex-col justify-center items-center space-y-4">
				<h1 className="text-2xl md:text-6xl font-bold text-gray-900">
					Writer's Block
				</h1>
				<h2 className="text-lg md:text-2xl font-semibold text-gray-700">
					Overcoming writer's block, one word at a time
				</h2>
			</div>
			<div className="flex flex-wrap justify-center items-center py-8">
				<div
					className="bg-white rounded-lg shadow-md p-8 flex justify-center items-center my-4 mx-4 h-32 w-32 hover:shadow-2xl hover:cursor-pointer hover:bg-gray-100"
					onClick={() => navigate("/viewBook")}
				>
					<h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
						Book
					</h2>
				</div>
				<div
					className="bg-white rounded-lg shadow-md p-8 flex justify-center items-center my-4 mx-4 h-32 w-32 hover:shadow-2xl hover:cursor-pointer hover:bg-gray-100"
					onClick={() => navigate("/viewStoryChar")}
				>
					<h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
						Character
					</h2>
				</div>
				<div
					className="bg-white rounded-lg shadow-md p-8 flex justify-center items-center my-4 mx-4 h-32 w-32 hover:shadow-2xl hover:cursor-pointer hover:bg-gray-100"
					onClick={() => navigate("/viewPlace")}
				>
					<h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
						Place
					</h2>
				</div>
				<div
					className="bg-white rounded-lg shadow-md p-8 flex justify-center items-center my-4 mx-4 h-32 w-32 hover:shadow-2xl hover:cursor-pointer hover:bg-gray-100"
					onClick={() => navigate("/viewStorySetting")}
				>
					<h2 className="text-lg font-bold text-gray-900 mb-4 text-center">
						Story Setting
					</h2>
				</div>				
			</div>
		</div>
	);
};

export default ViewHome;
