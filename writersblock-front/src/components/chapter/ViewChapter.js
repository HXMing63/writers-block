import React, { useEffect, useState } from "react";
import Chapter from "./Chapter";
import ChapterService from "../../services/ChapterService";
import AddChapter from "./AddChapter";
import ModalTemplate from "../assets/components/ModalTemplate";
import EditChapter from "./EditChapter";

const ViewChapter = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [chapters, setChapters] = useState([]);
	const [showAdd, setShowAdd] = useState(false);
	const [showEdit, setShowEdit] = useState({
		isVisible: false,
		chapter: null,
	});

	const editChapter = (chapter) => {
		setShowEdit({ isVisible: true, chapter: chapter });
	};

	const deleteChapter = () => {};

	const fetchData = async () => {
		setIsLoading(true);

		try {
			const response = await ChapterService.getChapters();
			setChapters(response.data);
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<div className="mx-auto overflow-hidden max-h-full">
			<h1 className="px-4 my-6 font-thin text-2xl tracking-wider flex">
				View Chapter
				<button
					className="ml-auto bg-emerald-400 hover:bg-emerald-700 text-white font-thin text-base tracking-wider py-2 px-4 rounded"
					onClick={() => setShowAdd(true)}
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
								<td className="font-thin text-base tracking-wider">
									Loading...
								</td>
							</tr>
						) : (
							chapters &&
							chapters.map((chapter) => {
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
			<ModalTemplate isOpen={showAdd} onClose={() => setShowAdd(false)}>
				<AddChapter fetchData={fetchData} setShowAdd={setShowAdd} />
			</ModalTemplate>
			<ModalTemplate
				isOpen={showEdit.isVisible}
				onClose={() => setShowEdit(false)}
			>
				<EditChapter
					chapterArg={showEdit.chapter}
					fetchData={fetchData}
					setShowEdit={setShowEdit}
				/>
			</ModalTemplate>
		</div>
	);
};

export default ViewChapter;
