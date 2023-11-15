import React from "react";

const StoryCharForm = ({ storyChar, setStoryChar }) => {
	const handleChange = (e) => {
		setStoryChar({ ...storyChar, [e.target.name]: e.target.value });
	};

	const handleImgChange = (e) => {
		const file = e.target.files[0];

		if (file) {
			const reader = new FileReader();

			reader.onload = (event) => {
				const imgData = new Uint8Array(event.target.result);

				setStoryChar({
					...storyChar,
					img: { name: file.name, data: Array.from(imgData) },
				});
			};

			reader.readAsArrayBuffer(file);
		}
	};

	return (
		<>
			<div className="items-center justify-center h-14 w-full my-4">
				<label className="block text-gray-600 text-sm font-normal">Name</label>
				<input
					type="text"
					name="name"
					value={storyChar.name}
					onChange={(e) => handleChange(e)}
					className="rounded-md h-10 w-96 border mt-2 px-2 py-2"
				></input>
			</div>
			<div className="items-center justify-center h-40 w-full my-4">
				<label className="block text-gray-600 text-sm font-normal">
					Description
				</label>
				<textarea
					type="text"
					name="description"
					rows={5}
					value={storyChar.description}
					onChange={(e) => handleChange(e)}
					className="rounded-md h-18 w-96 border mt-2 px-2 py-2"
				></textarea>
			</div>
			<div className="items-center justify-center h-14 w-full my-4">
				<label className="block text-gray-600 text-sm font-normal">
					Character Song
				</label>
				<input
					type="text"
					name="charSong"
					value={storyChar.charSong}
					onChange={(e) => handleChange(e)}
					className="rounded-md h-10 w-96 border mt-2 px-2 py-2"
				></input>
			</div>
			<div className="items-center justify-center h-14 w-full my-4">
				<label className="block text-gray-600 text-sm font-normal">
					Image Source
				</label>
				<div className="mt-2 flex items-center gap-x-3">
					<input
						className="relative m-0 block w-full min-w-0 rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none file:-mx-3 file:-my-[0.32rem]  file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 hover:file:text-gray-600"
						type="file"
						name="img"
						key={storyChar.fileInputKey}
						onChange={(e) => handleImgChange(e)}
						accept=".png,.jpg,.jpeg"
					></input>
				</div>
				<p
					className="mt-1 text-sm text-gray-500 dark:text-gray-500"
					id="file_input_help"
				>
					PNG, or JPG only
				</p>
			</div>
		</>
	);
};

export default StoryCharForm;
