import React, { useEffect, useState } from "react";
import Accordion from "../assets/components/Accordion";
import AddBook from "./AddBook";
import BookService from "../../services/BookService";
import ModalTemplate from "../assets/components/ModalTemplate";
import EditBook from "./EditBook";

const ViewBook = () => {
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [showEdit, setShowEdit] = useState({
		isVisible: false,
		book: null,
	});

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await BookService.getBooks();
			setBooks(response.data);
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	};

	const editBook = (book) => {
		setShowEdit({ isVisible: true, book: book });
	};

	const deleteBook = (id) => {
		console.log(`id: ${id}`)
		BookService.deleteBook(id).then(() => {
			setBooks((prevElement) => {
				return prevElement.filter((book) => book.id !== id);
			})
		});
	}

	const formatToAccordion = (book) => {
		return (
			<div className="divide-y-2">
				<div className="my-2">
					<label className="block text-gray-600 text-sm font-normal py-2">
						Synopsis
					</label>
					<p>{book.synopsis}</p>
				</div>
				<div className="my-2">
					<label className="block text-gray-600 text-sm font-normal py-2">
						Theme
					</label>
					<p>{book.theme}</p>
				</div>
				<div className="my-2">
					<label className="block text-gray-600 text-sm font-normal py-2">
						Cover
					</label>
					<p>{book.cover.name}</p>
				</div>
				<div className="pt-4 flex">
					<div className="">
						<button
							className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
							onClick={() => deleteBook(book.id)}
						>
							Delete
						</button>
					</div>
					<div className="w-full space-x-2 flex justify-end">
						<button
							className="rounded-md text-white font-semibold bg-orange-400 px-2 py-2 hover:bg-orange-700"
							// onClick={resetForm}
						>
							View
						</button>
						<button
							className="rounded-md text-white font-semibold bg-indigo-400 px-2 py-2 hover:bg-indigo-700"
							onClick={(e) => editBook(book)}
						>
							Edit
						</button>
					</div>
				</div>
			</div>
		);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="p-2 md:flex">
			<div className="md:flex-grow">
				<div className="p-4 font-thin text-2xl tracking-wider">
					<h1>Book View</h1>
				</div>
				<div className="p-4">
					{isLoading ? (
						<div className="p-4 font-thin text-2xl tracking-wider">
							Loading...
						</div>
					) : (
						books.map((book) => (
							<Accordion
								title={book.name}
								content={formatToAccordion(book)}
								key={book.id}
							/>
						))
					)}
				</div>
			</div>
			<div className="w-fit mx-auto flex">
				<AddBook fetchData={fetchData} />
			</div>
			<ModalTemplate
				isOpen={showEdit.isVisible}
				onClose={() => setShowEdit({ isVisible: false })}
			>
				<EditBook
					bookArg={showEdit.book}
					fetchData={fetchData}
					setShowEdit={setShowEdit}
				/>
			</ModalTemplate>
		</div>
	);
};

export default ViewBook;
