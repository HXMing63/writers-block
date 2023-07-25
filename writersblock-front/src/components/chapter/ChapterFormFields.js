import React from "react";

const ChapterFormFields = ({ chapter, setChapter }) => {
	const handleChange = (e) => {
		setChapter((prevChapter) => ({
			...prevChapter,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<input
				type="text"
				className="w-full p-2 border border-gray-300 rounded mb-4"
				placeholder="Chapter Name"
        name="name"
				value={chapter.name}
				onChange={(e) => handleChange(e)}
			/>

			<textarea
				className="w-full p-2 border border-gray-300 rounded resize-none"
				rows={25}
				placeholder="Write to your hearts desire here..."
        name="content"
				value={chapter.content}
				onChange={(e) => handleChange(e)}
			></textarea>
		</>
	);
};

export default ChapterFormFields;
