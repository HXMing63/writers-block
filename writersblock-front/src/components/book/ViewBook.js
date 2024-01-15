import React, { useEffect, useState } from "react";
import Accordion from "../assets/components/Accordion";
import AddBook from "./AddBook";
import BookService from "../../services/BookService";
import ModalTemplate from "../assets/components/ModalTemplate";
import EditBook from "./EditBook";
import { useNavigate } from "react-router-dom";

const ViewBook = () => {
	const navigate = useNavigate();

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

	const viewChapters = (bookId) => {
		navigate(`/viewChapter/${bookId}`);
	};

	const editBook = (book) => {
		setShowEdit({ isVisible: true, book: book });
	};

	const deleteBook = (id) => {
		BookService.deleteBook(id).then(() => {
			setBooks((prevElement) => {
				return prevElement.filter((book) => book.id !== id);
			});
		});
	};

	const formatToAccordion = (book) => {
		return (
			<div className="divide-y-2 divide-brand-lightest text-gray-200">
				<div className="my-2">
					<label className="block text-sm font-normal py-2">Synopsis</label>
					<p>{book.synopsis}</p>
				</div>
				<div className="my-2">
					<label className="block text-sm font-normal py-2">Theme</label>
					<p>{book.theme}</p>
				</div>
				<div className="my-2">
					<label className="block text-sm font-normal py-2">Cover</label>
					<p>{book.cover.name}</p>
				</div>
				<div className="pt-4 flex">
					<div className="">
						<button className="btn-error" onClick={() => deleteBook(book.id)}>
							Delete
						</button>
					</div>
					<div className="w-full space-x-2 flex justify-end">
						<button className="btn-transparent" onClick={(e) => editBook(book)}>
							Edit
						</button>
						<button
							className="btn-darkest"
							onClick={() => viewChapters(book.id)}
						>
							View
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
		<div className="page-body my-scrollbar">
			<div className="md:flex-grow">
				<div className="p-4 text-thin-wider-2xl text-gray-200">
					<h1>Book View</h1>
				</div>
				<div className="p-4">
					{isLoading ? (
						<div className="p-4 text-thin-wider-2xl text-gray-200">
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
