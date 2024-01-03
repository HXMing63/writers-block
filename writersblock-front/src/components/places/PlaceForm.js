import React from "react";
import InputField from "../assets/components/InputField";
import InputArea from "../assets/components/InputArea";
import InputChooser from "../assets/components/InputChooser";

const PlaceForm = ({ place, setPlace }) => {
	const handleChange = (e) => {
		setPlace({ ...place, [e.target.name]: e.target.value });
	};

	const handleImgChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (event) => {
				const imgData = new Uint8Array(event.target.result);

				setPlace({
					...place,
					img: { name: file.name, data: Array.from(imgData) },
				});
			};

			reader.readAsArrayBuffer(file);
		}
	};

	return (
		<>
			<InputField label={"Name"} propName={"name"} propVal={place.name} propOnChange={handleChange} placeholderText={"Enter name of place..."} />
			<InputArea label={"Description"} propName={"description"} propVal={place.description} propOnChange={handleChange} placeholderText={"Enter description of place..."} propRow={5} />
			<InputChooser label={"Image Source"} propName={"img"} propOnChange={handleImgChange} fileInputKey={place.fileInputKey} prevObj={place.img} />
		</>
	);
};

export default PlaceForm;
