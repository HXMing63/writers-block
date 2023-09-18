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
		<div className="mx-auto px-4 py-4 shadow border-b">
			<div className="font-thin text-2xl tracking-wider">
				<h1>Add New Book</h1>
			</div>
			<BookForm book={book} setBook={setBook} />
			<div className="w-full space-x-2 pt-4 flex justify-end">
				<button
					className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
					onClick={resetForm}
				>
					Clear
				</button>
				<button
					className="rounded-md text-white font-semibold bg-green-400 px-2 py-2 hover:bg-green-700"
					onClick={(e) => saveBook(e)}
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default AddBook;
