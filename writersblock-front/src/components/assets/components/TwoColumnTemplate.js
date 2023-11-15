import React from "react";

const BasePageTemplate = (props) => {
	return (
		<div className="p-2 md:flex">
			<div className="md:flex-grow">
        {props.children[0]}
      </div>
			<div className="w-fit mx-auto flex">
        {props.children[1]}
      </div>
		</div>
	);
};

export default BasePageTemplate;
