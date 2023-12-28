import React from "react";

const ViewAddPage = ({ children }) => {
    const childrenArray = React.Children.toArray(children);
    const viewDiv = childrenArray[0];
    const addDiv = childrenArray[1];
	const modals = childrenArray.slice(2).map(child => React.cloneElement(child));
	
	return (
		<div className="page-body my-scrollbar">
			<div className="md:flex-grow">
				{viewDiv}
			</div>
			<div className="w-fit mx-auto flex">
				{addDiv}
			</div>
			{modals}
		</div>
	);
};

export default ViewAddPage;
