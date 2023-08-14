import React from "react";

const Chapter = ({ chapter, editChapter, deleteChapter }) => {
	return (
		<tr
			key={chapter.id}
			className="text-left text-sm text-gray-500 uppercase tracking-wider"
		>
			<td className="py-3 px-6 w-3/12">
				<div>{chapter.name}</div>
			</td>
			<td className="py-3 px-6 w-3/12">
				<div className="truncate w-96">{chapter.content}</div>
			</td>
			<td className="py-3 px-6 w-2/12">
				<div className="truncate w-28">
					{chapter.storyChars
						? chapter.storyChars
                            .map((storyChar) => storyChar.name)
                            .join(", ")
						: "Empty"}
				</div>
			</td>
			<td className="py-3 px-6 w-2/12">
				<div className="truncate w-28">
					{chapter.storySettings
						? chapter.storySettings
								.map((storySetting) => storySetting.place.name)
								.join(", ")
						: "Empty"}
				</div>
			</td>
			<td className="text-right py-3 px-6 font-medium w-2/12">
				<a
					className="text-indigo-400 hover:text-indigo-800 px-4 hover:cursor-pointer"
					onClick={() => editChapter(chapter)}
				>
					Edit
				</a>
				<a
					className="text-red-400 hover:text-red-800 hover:cursor-pointer"
					onClick={() => deleteChapter(chapter.id)}
				>
					Delete
				</a>
			</td>
		</tr>
	);
};

export default Chapter;
