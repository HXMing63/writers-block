import React from "react";

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
			<div className="w-full my-4">
				<label className="block text-gray-600 text-sm font-normal">Name</label>
				<input
					type="text"
					name="name"
					value={book.name}
					onChange={(e) => handleChange(e)}
					className="rounded-md h-10 w-96 border mt-2 px-2 py-2"
				></input>
			</div>
			<div className="w-full my-4">
				<label className="block text-gray-600 text-sm font-normal">
					Synopsis
				</label>
				<textarea
					type="text"
					name="synopsis"
					rows={5}
					value={book.synopsis}
					onChange={(e) => handleChange(e)}
					className="rounded-md h-18 w-96 border mt-2 px-2 py-2"
				></textarea>
			</div>
			<div className="w-full my-4">
				<label className="block text-gray-600 text-sm font-normal">Theme</label>
				<input
					type="text"
					name="theme"
					value={book.theme}
					onChange={(e) => handleChange(e)}
					className="rounded-md h-10 w-96 border mt-2 px-2 py-2"
				></input>
			</div>
			<div className="w-full my-4">
				<label className="block text-gray-600 text-sm font-normal">Cover</label>
				<div className="mt-2 flex items-center gap-x-3">
					<input
						className="relative m-0 block w-96 min-w-0 rounded border border-solid py-[0.32rem] px-3 text-base focus:shadow-[0_0_0_1px] file:-mx-3 file:-my-[0.32rem] file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 hover:file:text-gray-600"
						type="file"
						name="img"
						key={book.fileInputKey}
						onChange={(e) => handleImgChange(e)}
						accept=".png,.jpg,.jpeg"
					></input>
				</div>
				{book.cover && (
					<p
						className="mt-1 text-sm text-red-500 dark:text-red-500"
						id="file_input_cover_name"
					>
						Current: {book.cover.name}
					</p>
				)}
				<p
					className="mt-1 text-sm text-gray-500 dark:text-gray-500"
					id="file_input_help"
				>
					PNG, JPEG, or JPG only
				</p>
			</div>
		</>
	);
};

export default BookForm;
