import React, { useState } from "react";
import PlaceService from "../../services/PlaceService";
import PlaceForm from "./PlaceForm";
import AddSideComponent from "../assets/template/AddSideComponentTemplate";

const AddPlace = ({ fetchData }) => {
	const [place, setPlace] = useState({
		id: "",
		name: "",
		description: "",
		fileInputKey: Date.now(),
		img: null,
	});

	const savePlace = (e) => {
		e.preventDefault();

		PlaceService.savePlace(place)
			.then((response) => {
				console.log(response);
				fetchData();
				resetForm();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const resetForm = () => {
		setPlace({
			id: "",
			img: "",
			name: "",
			description: "",
			fileInputKey: Date.now(),
		});
	};

	return (
		<AddSideComponent
			title={"Add New Place"}
			saveFunc={savePlace}
			resetForm={resetForm}
		>
			<PlaceForm place={place} setPlace={setPlace}></PlaceForm>
		</AddSideComponent>
	);
};

export default AddPlace;
