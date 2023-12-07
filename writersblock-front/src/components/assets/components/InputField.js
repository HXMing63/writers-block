import React from "react";

const InputField = ({ label, placeholderText, propName, propVal, propOnChange}) => {
	return (
		<div className="w-full my-4">
			<label className="block text-gray-200 text-sm font-normal">{label}</label>
			<input
				type="text"
				name={propName}
				value={propVal}
                placeholder={placeholderText}
				onChange={(e) => propOnChange(e)}
				className="h-10 w-80 mt-2 p-2 input-field-dark"
                autoComplete="off"
			></input>
		</div>
	);
};

export default InputField;
