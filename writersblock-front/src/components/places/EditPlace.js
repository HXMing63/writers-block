import React, { useState } from "react";
import PlaceService from "../../services/PlaceService";
import PlaceForm from "./PlaceForm";

const EditPlace = ({ toEdit, setModal, fetchData, deletePlace }) => {
	const [place, setPlace] = useState({
		id: toEdit.id,
		img: toEdit.img,
		name: toEdit.name,
		description: toEdit.description,
	});

	const updatePlace = (place) => {
		PlaceService.updatePlace(place.id, place)
			.then((response) => {
				fetchData();
				setModal({ isVisible: false });
			})
			.catch((error) => {
				console.log(error);
			});
	};

	return (
		<div className="mx-auto p-4">
			<div className="text-thin-wider-2xl text-gray-200">
				<h1>Edit Place</h1>
			</div>
			<PlaceForm place={place} setPlace={setPlace}></PlaceForm>
			<div className="w-full pt-4 flex">
				<div className="w-full">
					<button
						className="btn-error"
						onClick={(e) => deletePlace(e, place.id)}
					>
						Delete
					</button>
				</div>
				<button
					className="btn-success"
					onClick={(e) => updatePlace(e, place)}
				>
					Update
				</button>
			</div>
		</div>
	);
};

export default EditPlace;
