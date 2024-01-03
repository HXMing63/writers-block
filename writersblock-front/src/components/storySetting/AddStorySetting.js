import React, { useState } from "react";
import StorySettingService from "../../services/StorySettingService";
import StorySettingForm from "./StorySettingForm";
import AddSideComponent from "../assets/template/AddSideComponentTemplate";

const AddStorySetting = ({ fetchData }) => {
	const [query, setQuery] = useState("");
	const [places, setPlaces] = useState([]);
	const [storySetting, setStorySetting] = useState({
		id: "",
		place: null,
		time: "",
	});

	const saveStorySetting = (e) => {
		e.preventDefault();

		StorySettingService.saveStorySetting(storySetting)
			.then((response) => {
				console.log(response);
				fetchData();
				resetForm();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const resetForm = (e) => {
		e.preventDefault();
		setStorySetting({
			id: "",
			place: null,
			time: "",
		});
		setQuery("");
	};

	return (
		<AddSideComponent
			title={"Add New Story Setting"}
			saveFunc={saveStorySetting}
			resetForm={resetForm}
		>
			<StorySettingForm
				storySetting={storySetting}
				setStorySetting={setStorySetting}
				query={query}
				setQuery={setQuery}
				places={places}
				setPlaces={setPlaces}
			></StorySettingForm>
		</AddSideComponent>
	);
};

export default AddStorySetting;
