import React, { useState } from "react";
import BookForm from "./BookForm";
import BookService from "../../services/BookService";

const EditBook = ({ bookArg, fetchData, setShowEdit }) => {
	const [book, setBook] = useState({
        id: bookArg.id || "",
        name: bookArg.name || "",
		synopsis: bookArg.synopsis || "",
		theme: bookArg.theme || "",
		cover: bookArg.cover || null,
		fileInputKey: Date.now()
    });

    const saveBook = () => {
        BookService.updateBook(book).then(() => {
            fetchData();
        });
        setShowEdit({isVisible: false})
    };

	const resetForm = () => {};

	return (
		<div className="mx-auto px-4 py-4">
			<div className="text-thin-wider-2xl text-gray-200">
				<h1>Edit Book</h1>
			</div>
			<BookForm book={book} setBook={setBook} />
			<div className="w-full space-x-2 pt-4 flex justify-end">
				<button
					className="btn-error"
					onClick={resetForm}
				>
					Clear
				</button>
				<button
					className="btn-success"
					onClick={(e) => saveBook(e)}
				>
					Save
				</button>
			</div>
		</div>
	);
};

export default EditBook;
