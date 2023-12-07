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
			<div className="divide-y-2 divide-brand-lightest">
				<div className="md:flex min-h-60">
					<div className="flex-grow max-w-5xl px-2">
						<label className="block text-gray-200 text-base font-normal py-2">
							Content
						</label>
						<p className="text-gray-200 text-sm font-normal">{chapter.content}</p>
					</div>
					<div className="w-64 p-4 flex flex-col divide-y-2 divide-brand-lightest">
						<div className="h-1/2">
							<label className="block text-gray-200 text-base font-normal py-2">
								Characters
							</label>
							<ul className="text-gray-200 text-sm font-normal py-2 my-scrollbar">
								{chapter.storyChars.length > 0 ? (
									chapter.storyChars.map((storyChar) => (
										<li
											className="hover:text-brand-lightest cursor-pointer"
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
						<div className="h-1/2">
							<label className="block text-gray-200 text-base font-normal py-2">
								Settings
							</label>
							<ul className="text-gray-200 text-sm py-2 my-scrollbar">
								{chapter.storySettings.length > 0 ? (
									chapter.storySettings.map((storySetting) => (
										<li className="flex cursor-default hover:text-brand-lightest" key={storySetting.id}>
											<span title={storySetting.time}>
												{storySetting.place.name}
											</span>
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
							className="btn-error"
							onClick={() => deleteChapter(chapter.id)}
						>
							Delete
						</button>
					</div>
					<div className="w-full space-x-2 flex justify-end">
						<button
							className="btn-transparent"
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
		<div className="page-body my-scrollbar">
			<div className="p-2 md:w-full mx-auto">
				<div className="p-2 flex">
					<div className="flex-grow py-2 text-thin-wider-2xl text-gray-200">
						<h1>Chapter View</h1>
					</div>
					<button
						className="btn-success"
						onClick={() => setShowAdd(true)}
					>
						Add Chapter
					</button>
				</div>
				<div className="p-4">
					{isLoading ? (
						<div className="p-4 text-thin-wider-2xl">
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
