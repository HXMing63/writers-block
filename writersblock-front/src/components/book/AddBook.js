import React, { useState } from "react";
import BookForm from "./BookForm";
import BookService from "../../services/BookService";

const AddBook = ({ fetchData }) => {
	const [book, setBook] = useState({
		name: "",
		synopsis: "",
		theme: "",
		cover: null,
		chapters: null,
		fileInputKey: Date.now(),
	});

	const saveBook = (e) => {
		e.preventDefault();

		BookService.saveBook(book)
			.then((response) => {
				console.log(response);
				fetchData();
				resetForm();
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const resetForm = () => {};

	return (
		<div className="mx-auto p-4 border-l border-brand-darkest">
			<div className="text-thin-wider-2xl text-gray-200">
				<h1>Add New Book</h1>
			</div>
			<BookForm book={book} setBook={setBook} />
			<div className="w-full space-x-2 pt-4 flex justify-end">
				<button className="btn-error" onClick={resetForm}>
					Clear
				</button>
				<button className="btn-success" onClick={(e) => saveBook(e)}>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddBook;
