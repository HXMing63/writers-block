import React, { useEffect, useRef, useState } from "react";

const InputFieldSuggestion = ({
	label,
	propName,
	propVal,
	propOnChange,
    placeholderText,
	items,
	handleSelectItem,
}) => {
    const [itemIndex, setItemIndex] = useState(null);
    const [isOpen, setIsOpen] = useState(true);
    const dropDownRef = useRef(null);

	const handleKeyDown = (e) => {
		if (e.key === "ArrowDown" && itemIndex !== items.length - 1) {
			setItemIndex(itemIndex === null ? 0 : itemIndex + 1);
		} else if (e.key === "ArrowUp" && itemIndex !== 0) {
			setItemIndex(itemIndex === null ? items.length - 1 : itemIndex - 1);
		} else if (e.key === "Enter" && itemIndex !== null) {
			handleSelectItem(e, items[itemIndex]);
		}
	};

	useEffect(() => {
		const handleClickOutside = (e) => {
			if (dropDownRef.current && !dropDownRef.current.contains(e.target)) {
				setIsOpen(false);
			}
		};

		document.addEventListener("mousedown", handleClickOutside);
		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [dropDownRef]);

	return (
		<div className="w-full my-4">
			<label className="block text-gray-200 text-sm font-normal">{label}</label>
			<input
				type="text"
				name={propName}
				value={propVal}
				placeholder={placeholderText}
				onChange={(e) => propOnChange(e)}
				onKeyDown={(e) => handleKeyDown(e)}
                onFocus={() => setIsOpen(true)}
				className="h-10 w-80 mt-2 p-2 input-field-dark"
				autoComplete="off"
			></input>
			{(items.length > 0) && (isOpen) && (
				<div className="absolute z-10 w-80 mt-1 bg-brand-darkest border border-brand-lightest text-brand-light rounded-md shadow-lg">
					<ul className="py-2" ref={dropDownRef}>
						{items.map((item, index) => (
							<li
								key={item.id}
								className={`px-3 py-1 hover:bg-brand-light hover:text-brand-darkest hover:cursor-pointer ${
									itemIndex === index ? "bg-brand-light" : ""
								}`}
								onClick={(e) => handleSelectItem(e, item)}
							>
								{item.name}
							</li>
						))}
					</ul>
				</div>
			)}
		</div>
	);
};

export default InputFieldSuggestion;
