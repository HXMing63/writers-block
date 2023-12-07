import React from "react";
import { useNavigate } from "react-router-dom";

const ViewHome = () => {
	const navigate = useNavigate();
	return (
		<div className="bg-brand-linear-gradient flex-grow pt-10">
			<div className="flex flex-col justify-center items-center space-y-4 hover:cursor-default">
				<h1 className="text-2xl md:text-6xl font-bold text-white">
					Writer's Block
				</h1>
				<h2 className="text-lg md:text-2xl font-semibold text-gray-200">
					Overcoming writer's block, one word at a time
				</h2>
			</div>
			<div className="flex flex-wrap justify-center items-center py-8">
				<div
					className="bg-brand-darkest border border-brand-lightest rounded-lg shadow-md p-8 flex justify-center items-center my-4 mx-4 h-32 w-32 text-lg font-bold text-gray-200 mb-4 text-center hover:shadow-2xl hover:cursor-pointer hover:bg-brand-lightest hover:text-brand-darkest"
					onClick={() => navigate("/viewBook")}
				>
					Book
				</div>
				<div
					className="bg-brand-darkest border border-brand-lightest rounded-lg shadow-md p-8 flex justify-center items-center my-4 mx-4 h-32 w-32 text-lg font-bold text-gray-200 mb-4 text-center hover:shadow-2xl hover:cursor-pointer hover:bg-brand-lightest hover:text-brand-darkest"
					onClick={() => navigate("/viewStoryChar")}
				>
					Character
				</div>
				<div
					className="bg-brand-darkest border border-brand-lightest rounded-lg shadow-md p-8 flex justify-center items-center my-4 mx-4 h-32 w-32 text-lg font-bold text-gray-200 mb-4 text-center hover:shadow-2xl hover:cursor-pointer hover:bg-brand-lightest hover:text-brand-darkest"
					onClick={() => navigate("/viewPlace")}
				>
					Place
				</div>
				<div
					className="bg-brand-darkest border border-brand-lightest rounded-lg shadow-md p-8 flex justify-center items-center my-4 mx-4 h-32 w-32 text-lg font-bold text-gray-200 mb-4 text-center hover:shadow-2xl hover:cursor-pointer hover:bg-brand-lightest hover:text-brand-darkest"
					onClick={() => navigate("/viewStorySetting")}
				>
					Story Setting
				</div>
			</div>
		</div>
	);
};

export default ViewHome;
