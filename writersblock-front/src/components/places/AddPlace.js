import React, { useState } from "react";
import PlaceService from "../../services/PlaceService";
import PlaceForm from "./PlaceForm";

const AddPlace = ({ fetchData }) => {
	const [place, setPlace] = useState({
		id: "",
		name: "",
		description: "",
		fileInputKey: Date.now(),
		img: null,
		// img: {
		//   name: "",
		//   data: null
		// }
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
		<div className="mx-auto p-4 md:border-l border-brand-darkest">
			<div className="text-thin-wider-2xl text-gray-200">
				<h1>Add New Place</h1>
			</div>
			<PlaceForm place={place} setPlace={setPlace}></PlaceForm>
			<div className="flex items-center justify-end h-14 w-full my-8 space-x-2 pt-4">
				<button className="btn-error" onClick={resetForm}>
					Clear
				</button>
				<button className="btn-success" onClick={(e) => savePlace(e)}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddPlace;
