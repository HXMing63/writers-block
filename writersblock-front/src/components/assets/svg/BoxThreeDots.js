import React from "react";

const BoxThreeDots = ({ title }) => {
	return (
		<svg
			className="fill-current h-3 w-3"
			viewBox="0 0 20 20"
			xmlns="http://www.w3.org/2000/svg"
		>
			{title && (<title>{title}</title>)}
			<path d="M10 12a2 2 0 100-4 2 2 0 000 4zM2 12a2 2 0 100-4 2 2 0 000 4zM18 12a2 2 0 100-4 2 2 0 000 4z" />
		</svg>
	);
};

export default BoxThreeDots;
