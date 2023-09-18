import React, { useEffect, useState } from "react";
import Accordion from "../assets/components/Accordion";
import AddBook from "./AddBook";
import BookService from "../../services/BookService";

const ViewBook = () => {
	// const books = [
	// 	{
	// 		id: 1,
	// 		name: "Section 1",
	// 		synopsis:
	// 			"Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 Content for Section 1 ",
	// 		theme: "Theme for Section 1",
	// 	},
	// 	{
	// 		id: 2,
	// 		name: "Section 2",
	// 		synopsis:
	// 			"Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 Content for Section 2 ",
	// 		theme: "Theme for Section 2",
	// 	},
	// 	{
	// 		id: 3,
	// 		name: "Section 3",
	// 		synopsis: "Content for Section 3",
	// 		theme: "Theme for Section 3",
	// 	},
	// ];
	const [books, setBooks] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

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

	const formatToAccordion = (book) => {
		return (
			<div className="divide-y-2">
				<div className="my-2">
					<label className="block text-gray-600 text-sm font-normal my-2">
						Synopsis
					</label>
					<p>{book.synopsis}</p>
				</div>
				<div className="my-2">
					<label className="block text-gray-600 text-sm font-normal my-2">
						Theme
					</label>
					<p>{book.theme}</p>
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
                    ) : (books.map((book) => (
						<Accordion
							title={book.name}
							content={formatToAccordion(book)}
							key={book.id}
						/>
					)))}
				</div>
			</div>
			<div className="w-fit mx-auto flex">
				<AddBook fetchData={fetchData} />
			</div>
		</div>
	);
};

export default ViewBook;
