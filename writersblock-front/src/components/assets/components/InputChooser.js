import React from "react";

const InputChooser = ({ label, fileInputKey, propName, propOnChange, prevObj }) => {
	return (
		<div className="w-full my-4">
			<label className="block text-gray-200 text-sm font-normal">{label}</label>
			<div className="mt-2 flex items-center gap-x-3">
				<input
					className="relative m-0 block w-80 min-w-0 py-[0.32rem] px-3 text-base input-field-dark file:-mx-3 file:-my-[0.32rem] file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-brand-darkest file:text-gray-200 file:px-3 file:py-[0.32rem] file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-brand-lightest hover:file:text-brand-darkest"
					type="file"
					name={propName}
					key={fileInputKey}
					onChange={(e) => propOnChange(e)}
					accept=".png,.jpg,.jpeg"
				></input>
			</div>
			{prevObj && (
				<p
					className="mt-1 text-sm text-brand-error"
					id="file_input_cover_name"
				>
					Current: {prevObj.name}
				</p>
			)}
			<p
				className="mt-1 text-sm text-gray-600 dark:text-gray-200"
				id="file_input_help"
			>
				PNG, JPEG, or JPG only
			</p>
		</div>
	);
};

export default InputChooser;
