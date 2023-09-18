import React, { useState } from "react";
import DoubleDown from "../svg/DoubleDown";

const Accordion = ({ title, content }) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleAccordion = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="border rounded-lg mb-2">
			<div
				className="flex justify-between p-3 cursor-pointer"
				onClick={toggleAccordion}
			>
				<h2 className="font-thin text-2xl tracking-wider">{title}</h2>
				<div className={isOpen ? "transform rotate-180" : ""}>
					<DoubleDown />
				</div>
			</div>
			{isOpen && (
				<div className="p-3 bg-gray-100 ">
					{content}
				</div>
			)}
		</div>
	);
};

export default Accordion;
