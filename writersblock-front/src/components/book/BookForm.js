import React from "react";
import InputField from "../assets/components/InputField";
import InputArea from "../assets/components/InputArea";
import InputChooser from "../assets/components/InputChooser";

const BookForm = ({ book, setBook }) => {
	const handleChange = (e) => {
		setBook({ ...book, [e.target.name]: e.target.value });
	};

	const handleImgChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (event) => {
				const imgData = new Uint8Array(event.target.result);

				setBook({
					...book,
					cover: { name: file.name, data: Array.from(imgData) },
				});
			};

			reader.readAsArrayBuffer(file);
		}
	};

	return (
		<>
			<InputField label={"Name"} placeholderText={"Enter book name here..."} propName={"name"} propVal={book.name} propOnChange={handleChange} />
			<InputArea label={"Synopsis"} placeholderText={"Enter synopsis here..."} propName={"synopsis"} propRow={10} propVal={book.synopsis} propOnChange={handleChange} />
			<InputField label={"Theme"} placeholderText={"Enter book theme here..."} propName={"theme"} propVal={book.theme} propOnChange={handleChange} />
			<InputChooser label={"Cover"} propName={"cover"} fileInputKey={book.fileInputKey} propOnChange={handleImgChange} prevObj={book.cover} />
		</>
	);
};

export default BookForm;
