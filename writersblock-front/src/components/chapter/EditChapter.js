import React, { useState } from "react";
import ChapterFormFields from "./ChapterFormFields";
import PlusIcon from "../assets/svg/PlusIcon";
import MinusIcon from "../assets/svg/MinusIcon";
import ChapterCharMultiSelect from "./ChapterCharMultiSelect";
import ChapterSettingMultiSelect from "./ChapterSettingMultiSelect";
import ChapterService from "../../services/ChapterService";
import ModalTemplate from "../assets/components/ModalTemplate";

const EditChapter = ({ chapterArg, bookId, fetchBookById, setShowEdit, }) => {
	const [charModal, setCharModal] = useState(false);
	const [settingModal, setSettingModal] = useState(false);
	const [chapter, setChapter] = useState({
		id: chapterArg.id || "",
		name: chapterArg.name || "",
		content: chapterArg.content || "",
		storyChars: chapterArg.storyChars || [],
		storySettings: chapterArg.storySettings || [],
	});

	const deleteRow = (key, target) => {
		setChapter((prevChapter) => ({
			...prevChapter,
			[key]: chapter[key].filter((item) => item !== target),
		}));
	};

	const saveChapter = () => {
		const config = {
			params: {
				id: bookId,
			},
		};

		ChapterService.updateChapter(chapter, config).then(() => {
			fetchBookById(bookId);
		});

		setShowEdit({ isVisible: false });
	};

	return (
		<div className="md:flex">
			<div className="md:flex-grow">
				<div className="p-4 text-thin-wider-2xl flex justify-between items-center">
					<h1 className="text-gray-200">Edit Chapter</h1>
					<button
						className="btn-success"
						onClick={() => saveChapter()}
					>
						Save
					</button>
				</div>
				<div className="p-2">
					<ChapterFormFields
						chapter={chapter}
						setChapter={setChapter}
					></ChapterFormFields>
				</div>
			</div>
			<div className="w-fit mx-auto flex flex-col">
				<div className="h-1/2 p-4">
					<h2 className="text-thin-wider-2xl flex items-center text-gray-200">
						Characters
						<span
							className="ml-auto rounded-md text-brand-lightest hover:text-brand-darkest hover:cursor-pointer hover:bg-brand-lightest"
							onClick={() => setCharModal(!charModal)}
						>
							<PlusIcon />
						</span>
					</h2>
					<div className="max-h-80 my-scrollbar">
						<ul className="divide-y-2 divide-brand-lightest">
							{chapter.storyChars.length === 0 ? (
								<li className="p-3 font-thin text-md tracking-wider flex items-center text-gray-200">
									There is no character yet
								</li>
							) : (
								chapter.storyChars.map((item, index) => (
									<li
										key={index}
										className={`p-3 font-thin text-md tracking-wider flex items-center text-gray-200`}
									>
										{item.name}
										<span
											className="ml-auto rounded-md text-brand-lightest hover:text-brand-darkest hover:cursor-pointer hover:bg-brand-lightest"
											onClick={() => deleteRow("storyChars", item)}
										>
											<MinusIcon />
										</span>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
				<div className="h-1/2 p-4">
					<h2 className="text-thin-wider-2xl flex items-center text-gray-200">
						Settings
						<span
							className="ml-auto rounded-md text-brand-lightest hover:text-brand-darkest hover:cursor-pointer hover:bg-brand-lightest"
							onClick={() => setSettingModal(!settingModal)}
						>
							<PlusIcon />
						</span>
					</h2>
					<div className="max-h-80 my-scrollbar">
						<ul className="divide-y-2 divide-brand-lightest">
							{chapter.storySettings.length === 0 ? (
								<li className="p-3 font-thin text-md tracking-wider flex items-center text-gray-200">
									There is no setting yet
								</li>
							) : (
								chapter.storySettings.map((item, index) => (
									<li
										key={index}
										className={`p-3 font-thin text-md tracking-wider flex flex-wrap items-center text-ellipsis whitespace-nowrap overflow-hidden text-gray-200`}
									>
										<span className="flex-grow">{item.place.name}</span>
										<span className="pr-2 font-thin text-xs text-ellipsis whitespace-nowrap overflow-hidden text-slate-500">
											{item.time}
										</span>
										<span
											className="ml-auto rounded-md text-brand-lightest hover:text-brand-darkest hover:cursor-pointer hover:bg-brand-lightest"
											onClick={() => deleteRow("storySettings", item)}
										>
											<MinusIcon />
										</span>
									</li>
								))
							)}
						</ul>
					</div>
				</div>
			</div>
			<ModalTemplate isOpen={charModal} onClose={() => setCharModal(false)}>
				<ChapterCharMultiSelect
					chapter={chapter}
					setChapter={setChapter}
					setModal={setCharModal}
				/>
			</ModalTemplate>
			<ModalTemplate isOpen={settingModal} onClose={() => setSettingModal(false)}>
				<ChapterSettingMultiSelect
					chapter={chapter}
					setChapter={setChapter}
					setModal={setSettingModal}
				/>
			</ModalTemplate>
		</div>
	);
};

export default EditChapter;
