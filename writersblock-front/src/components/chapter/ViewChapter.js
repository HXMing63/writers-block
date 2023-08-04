import React, { useEffect, useState } from "react";
import Chapter from "./Chapter";
import ChapterService from "../../services/ChapterService";
import { useNavigate } from "react-router-dom";

const ViewChapter = () => {
	const navigate = useNavigate();
	const [isLoading, setIsLoading] = useState(false);
	const [chapters, setChapters] = useState([]);

	const editChapter = () => {};

	const deleteChapter = () => {};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await ChapterService.getChapters();
			setChapters(response.data);
			// console.log(response);
			// console.log(response.data);
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	};

	useEffect(() => {
		console.log("using effect...");
		fetchData();
		// console.log(chapters);
		// console.log(isLoading);
	}, []);

	useEffect(() => {
		console.log(chapters);
	}, [chapters]);

	return (
		<div className="mx-auto overflow-hidden max-h-full">
			<h1 className="px-4 my-6 font-thin text-2xl tracking-wider flex">
				View Chapter
				<button
					className="ml-auto bg-emerald-400 hover:bg-emerald-700 text-white font-thin text-base tracking-wider py-2 px-4 rounded"
					onClick={() => navigate("/addChapter")}
				>
					Add Chapter
				</button>
			</h1>
			<div className="flex w-full px-4 h-168 overflow-x-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
				<table className="table-auto w-full">
					<thead className="bg-gray-200 z-10 sticky top-0">
						<tr>
							<th className="py-3 px-6 w-3/12">Name</th>
							<th className="py-3 px-6 w-3/12">Content</th>
							<th className="py-3 px-6 w-2/12">Characters</th>
							<th className="py-3 px-6 w-2/12">Settings</th>
							<th className="py-3 px-6 w-2/12">Actions</th>
						</tr>
					</thead>
					<tbody className="overflow-y-auto divide-y-2 divide-gray-100">
						{isLoading ? (
							<tr>
								<td>Loading...</td>
							</tr>
						) : (
							chapters &&
							chapters.map((chapter) => {
								console.log(chapter);
								return (
									<Chapter
										chapter={chapter}
										editChapter={editChapter}
										deleteChapter={deleteChapter}
										key={chapter.id}
									></Chapter>
								);
							})
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default ViewChapter;
