import React from "react";

const XIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="50"
			height="50"
			viewBox="0 0 50 50"
		>
			<line
				x1="10"
				y1="10"
				x2="40"
				y2="40"
				strokeWidth="4"
				className="stroke-brand-lightest"
			/>
			<line
				x1="40"
				y1="10"
				x2="10"
				y2="40"
				strokeWidth="4"
				className="stroke-brand-lightest"
			/>
		</svg>
	);
};

export default XIcon;
