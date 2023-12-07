import React from "react";
import InputField from "../assets/components/InputField";
import InputArea from "../assets/components/InputArea";

const ChapterFormFields = ({ chapter, setChapter }) => {
	const handleChange = (e) => {
		setChapter((prevChapter) => ({
			...prevChapter,
			[e.target.name]: e.target.value,
		}));
	};

	return (
		<>
			<InputField label={'Chapter Name'} placeholderText={'Enter Chapter Name Here...'} propName={'name'} propVal={chapter.name} propOnChange={handleChange} />
			<InputArea label={'Chapter Content'} placeholderText={`Write to your heart's desire here...`} propName={'content'} propRow={25} propVal={chapter.content} propOnChange={handleChange} />
		</>
	);
};

export default ChapterFormFields;
