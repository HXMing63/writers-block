import React, { useState } from "react";
import ChapterFormFields from "./ChapterFormFields";
import PlusIcon from "../assets/svg/PlusIcon";
import MinusIcon from "../assets/svg/MinusIcon";
import ChapterCharMultiSelect from "./ChapterCharMultiSelect";
import ChapterSettingMultiSelect from "./ChapterSettingMultiSelect";
import ChapterService from "../../services/ChapterService";

const EditChapter = ({ chapterArg, fetchData, setShowEdit }) => {    
	const [charModal, setCharModal] = useState(false);
	const [settingModal, setSettingModal] = useState(false);
	const [chapter, setChapter] = useState({
		id: chapterArg.id || "",
		name: chapterArg.name || "",
		content: chapterArg.content || "",
		storyChars: chapterArg.storyChars || [],
		storySettings: chapterArg.storySettings || []
	});

	const deleteRow = (key, target) => {
		setChapter((prevChapter) => ({
			...prevChapter,
			[key]: chapter[key].filter((item) => item !== target),
		}));
	};

	const saveChapter = () => {
		ChapterService.updateChapter(chapter).then(() => {
			fetchData();
		});		
		setShowEdit({isVisible: false});
	};

	return (
		<div className="flex flex-col md:flex-row">
			<div className="w-full md:w-2/3 container mx-auto p-4">
				<div className="p-4 font-thin text-2xl tracking-wider flex justify-between items-center">
					<h1>Edit Chapter</h1>
					<button
						className="bg-emerald-400 hover:bg-emerald-700 text-white font-thin text-2xl tracking-wider py-2 px-4 rounded"
						onClick={() => saveChapter()}
					>
						Save
					</button>
				</div>
				<div className="p-4">
					<ChapterFormFields
						chapter={chapter}
						setChapter={setChapter}
					></ChapterFormFields>
				</div>
			</div>
			<div className="w-full md:w-1/3 container mx-auto p-4">
				<div className="h-1/2 p-4">
					<h2 className="font-thin text-2xl tracking-wider flex items-center">
						Characters
						<span
							className="ml-auto hover:shadow-2xl hover:cursor-pointer hover:bg-gray-200"
							onClick={() => setCharModal(!charModal)}
						>
							<PlusIcon />
						</span>
					</h2>
					<div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
						<ul className="divide-y-2 divide-gray-100">
							{chapter.storyChars.length === 0 ? (
								<li className="p-3 font-thin text-md tracking-wider flex items-center">
									There is no character yet
								</li>
							) : (
								chapter.storyChars.map((item, index) => (
									<li
										key={index}
										className={`p-3 font-thin text-md tracking-wider flex items-center`}
									>
										{item.name}
										<span
											className="ml-auto hover:shadow-2xl hover:cursor-pointer hover:bg-gray-200"
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
					<h2 className="font-thin text-2xl tracking-wider flex items-center">
						Settings
						<span
							className="ml-auto hover:shadow-2xl hover:cursor-pointer hover:bg-gray-200"
							onClick={() => setSettingModal(!settingModal)}
						>
							<PlusIcon />
						</span>
					</h2>
					<div className="max-h-80 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
						<ul className="divide-y-2 divide-gray-100">
							{chapter.storySettings.length === 0 ? (
								<li className="p-3 font-thin text-md tracking-wider flex items-center">
									There is no setting yet
								</li>
							) : (
								chapter.storySettings.map((item, index) => (
									<li
										key={index}
										className={`p-3 font-thin text-md tracking-wider flex flex-wrap items-center text-ellipsis whitespace-nowrap overflow-hidden`}
									>
										<span className="flex-grow">{item.place.name}</span>
										<span className="pr-2 font-thin text-xs text-ellipsis whitespace-nowrap overflow-hidden text-slate-500">
											{item.time}
										</span>
										<span
											className="ml-auto hover:shadow-2xl hover:cursor-pointer hover:bg-gray-200"
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
			{charModal && (
				<div className="flex flex-shrink fixed inset-0 z-10 overflow-y-hidden overflow-x-hidden justify-center">
					<div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
					<div className="flex items-center px-4 py-8">
						<div className="relative max-w-fit mx-auto bg-white rounded-md shadow-lg">
							<ChapterCharMultiSelect
								chapter={chapter}
								setChapter={setChapter}
								setModal={setCharModal}
							/>
						</div>
					</div>
				</div>
			)}
			{settingModal && (
				<div className="flex flex-shrink fixed inset-0 z-10 overflow-y-hidden overflow-x-hidden justify-center">
					<div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
					<div className="flex items-center px-4 py-8">
						<div className="relative mx-auto bg-white rounded-md shadow-lg">
							<ChapterSettingMultiSelect
								chapter={chapter}
								setChapter={setChapter}
								setModal={setSettingModal}
							/>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default EditChapter;
