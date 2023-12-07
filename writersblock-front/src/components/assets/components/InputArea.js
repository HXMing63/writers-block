import React from "react";

const InputArea = ({ label, placeholderText, propName, propRow, propVal, propOnChange}) => {
	return (
		<div className="w-full my-4">
			<label className="block text-gray-200 text-sm font-normal">
				{label}
			</label>
			<textarea
				type="text"
				name={propName}
				rows={propRow}
				value={propVal}
                placeholder={placeholderText}
				onChange={(e) => propOnChange(e)}
				className="w-80 mt-2 p-2 input-field-dark my-scrollbar resize-none"
			></textarea>
		</div>
	);
};

export default InputArea;
