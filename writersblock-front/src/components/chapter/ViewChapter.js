import React, { useEffect, useState } from "react";
import ChapterService from "../../services/ChapterService";
import AddChapter from "./AddChapter";
import ModalTemplate from "../assets/components/ModalTemplate";
import EditChapter from "./EditChapter";
import { useParams } from "react-router";
import Accordion from "../assets/components/Accordion";
import StoryCharCard from "../storyChar/StoryCharCard";

const ViewChapter = () => {
	const { param: bookId } = useParams();

	const [isLoading, setIsLoading] = useState(false);
	const [chapters, setChapters] = useState([]);
	const [showAdd, setShowAdd] = useState(false);
	const [showEdit, setShowEdit] = useState({
		isVisible: false,
		chapter: null,
	});
	const [showCharModal, setShowCharModal] = useState({
		isVisible: false,
		character: null,
	});

	const triggerCharModal = (character) => {
		setShowCharModal({ isVisible: true, character: character });
	};

	const formatToAccordion = (chapter) => {
		return (
			<div className="divide-y-2">
				<div className="p-2 md:flex">
					<div className="my-2 flex-grow max-w-5xl">
						<label className="block text-gray-600 text-sm font-normal py-2">
							Content
						</label>
						<p>{chapter.content}</p>
					</div>
					<div className="w-fit flex flex-col divide-y-2 ">
						<div className="h-1/2 p-4">
							<label className="block text-gray-600 text-sm font-normal py-2">
								Characters
							</label>
							<ul>
								{chapter.storyChars.length > 0 ? (
									chapter.storyChars.map((storyChar) => (
										<li
											className="hover:text-gray-500 cursor-pointer"
											onClick={() => triggerCharModal(storyChar)}
											key={storyChar.id}
										>
											{storyChar.name}
										</li>
									))
								) : (
									<li>There are no characters at the moment...</li>
								)}
							</ul>
						</div>
						<div className="h-1/2 p-4">
							<label className="block text-gray-600 text-sm font-normal py-2">
								Settings
							</label>
							<ul>
								{chapter.storySettings.length > 0 ? (
									chapter.storySettings.map((storySetting) => (
										<li className="flex" key={storySetting.id}>
											<span className="flex-grow" title={storySetting.time}>
												{storySetting.place.name}
											</span>
											{/* <span>{storySetting.time}</span> */}
										</li>
									))
								) : (
									<li>There are no settings at the moment...</li>
								)}
							</ul>
						</div>
					</div>
				</div>
				<div className="p-2 flex">
					<div className="">
						<button
							className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
							onClick={() => deleteChapter(chapter.id)}
						>
							Delete
						</button>
					</div>
					<div className="w-full space-x-2 flex justify-end">
						<button
							className="rounded-md text-white font-semibold bg-indigo-400 px-2 py-2 hover:bg-indigo-700"
							onClick={(e) => editChapter(chapter)}
						>
							Edit
						</button>
					</div>
				</div>
			</div>
		);
	};

	const editChapter = (chapter) => {
		setShowEdit({ isVisible: true, chapter: chapter });
	};

	const deleteChapter = (id) => {
		ChapterService.deleteChapter(id).then(() => {
			setChapters((prevElement) => {
				return prevElement.filter((chapter) => chapter.id !== id);
			});
		});
	};

	const fetchChapterByBookId = async (bookId) => {
		setIsLoading(true);

		try {
			const response = await ChapterService.getChaptersByBookId(bookId);

			if (response.data) {
				setChapters(response.data);
			}
		} catch (error) {
			console.log(error);
		}

		setIsLoading(false);
	};

	useEffect(() => {
		fetchChapterByBookId(bookId);
	}, [bookId]);

	return (
		<div className="mx-auto overflow-hidden max-h-full">
			<div className="p-2">
				<div className="p-2 font-thin text-2xl tracking-wider flex border-b-2 pb-4">
					<div className="flex-grow py-2">
						<h1 className="">Chapter View</h1>
					</div>
					<button
						className="ml-auto bg-emerald-400 hover:bg-emerald-700 text-white font-thin text-base tracking-wider py-2 px-4 rounded"
						onClick={() => setShowAdd(true)}
					>
						Add Chapter
					</button>
				</div>
				<div className="p-4">
					{isLoading ? (
						<div className="p-4 font-thin text-2xl tracking-wider">
							Loading...
						</div>
					) : chapters.length > 0 ? (
						chapters.map((chapter) => (
							<Accordion
								title={chapter.name}
								content={formatToAccordion(chapter)}
								key={chapter.id}
							/>
						))
					) : (
						<p>There are no chapters at the moment...</p>
					)}
				</div>
			</div>
			<ModalTemplate isOpen={showAdd} onClose={() => setShowAdd(false)}>
				<AddChapter
					bookId={bookId}
					fetchChapterByBookId={fetchChapterByBookId}
					setShowAdd={setShowAdd}
				/>
			</ModalTemplate>
			<ModalTemplate
				isOpen={showEdit.isVisible}
				onClose={() => setShowEdit({ isVisible: false })}
			>
				<EditChapter
					chapterArg={showEdit.chapter}
					bookId={bookId}
					fetchBookById={fetchChapterByBookId}
					setShowEdit={setShowEdit}
				/>
			</ModalTemplate>
			<ModalTemplate
				isOpen={showCharModal.isVisible}
				onClose={() => setShowCharModal({ isVisible: false })}
			>
				<StoryCharCard character={showCharModal.character} />
			</ModalTemplate>
		</div>
	);
};

export default ViewChapter;
