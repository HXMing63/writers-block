import React, { useState } from "react";
import DoubleDown from "../svg/DoubleDown";

const Accordion = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="border border-brand-lightest rounded-lg mb-2">
			<div
				className="flex justify-between p-3 cursor-pointer"
				onClick={toggleAccordion}
			>
				<h2 className="text-thin-wider-2xl text-gray-200">{title}</h2>
				<div className={isOpen ? "transform rotate-180" : ""}>
					<DoubleDown />
				</div>
			</div>
			{isOpen && (
				<div className="p-3 bg-transparent">
					{content}
				</div>
			)}
		</div>
	);
};

export default Accordion;
