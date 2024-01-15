import React from "react";
import InputField from "../assets/components/InputField";
import InputArea from "../assets/components/InputArea";
import InputChooser from "../assets/components/InputChooser";

const StoryCharForm = ({ storyChar, setStoryChar }) => {
	const handleChange = (e) => {
		setStoryChar({ ...storyChar, [e.target.name]: e.target.value });
	};

	const handleImgChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (event) => {
				const imgData = new Uint8Array(event.target.result);

				setStoryChar({
					...storyChar,
					img: { name: file.name, data: Array.from(imgData) },
				});
			};

			reader.readAsArrayBuffer(file);
		}
	};

	return (
		<>
			<InputField label={"Name"} propName={"name"} propVal={storyChar.name} propOnChange={handleChange} placeholderText={"Enter name of character here..."}/>
			<InputArea label={"Description"} propName={"description"} propRow={5} propVal={storyChar.description} propOnChange={handleChange} placeholderText={"Enter character description here..."}/>
			<InputField label={"Character Song"} propName={"charSong"} propVal={storyChar.charSong} propOnChange={handleChange} placeholderText={"Enter character song here..."}/>
			<InputChooser label={"Image Source"} propName={"img"} propOnChange={handleImgChange} fileInputKey={storyChar.fileInputKey} prevObj={storyChar.img}/>
		</>
	);
};

export default StoryCharForm;
