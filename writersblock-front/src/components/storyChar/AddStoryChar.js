import React, { useState } from "react";
import StoryCharForm from "./StoryCharForm";
import StoryCharService from "../../services/StoryCharService";
import AddSideComponent from "../assets/template/AddSideComponentTemplate";

const AddStoryChar = ({ fetchData }) => {
	const [storyChar, setStoryChar] = useState({
		id: "",
		name: "",
		description: "",
		charSong: "",
		img: null,
		fileInputKey: Date.now(),
	});

	const saveStoryChar = (e) => {
		e.preventDefault();

		StoryCharService.saveStoryChar(storyChar)
			.then((response) => {
				fetchData();
				resetForm();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const resetForm = () => {
		setStoryChar({
			id: "",
			name: "",
			description: "",
			charSong: "",
			fileInputKey: Date.now(),
		});
	};

	return (
		<AddSideComponent
			title={"Add New Character"}
			saveFunc={saveStoryChar}
			resetForm={resetForm}
		>
			<StoryCharForm
				storyChar={storyChar}
				setStoryChar={setStoryChar}
			></StoryCharForm>
		</AddSideComponent>
	);
};

export default AddStoryChar;
