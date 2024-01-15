import React, { useEffect, useState } from "react";

const StoryCharCard = ({ character }) => {
	const [imgURL, setImgURL] = useState(null);

	const initImg = () => {
		if (character.img !== null) {
			const fileTypeRegex = /\.(png|jpe?g)$/i;
			const match = character.img.name.match(fileTypeRegex);
			let blob = null;

			if (match !== null) {
				const imgData = Uint8Array.from(atob(character.img.data), (c) =>
					c.charCodeAt(0)
				);
				if (match[0] === ".png" || match[0] === ".PNG") {
					blob = new Blob([imgData.buffer], { type: "image/png" });
				} else if (
					match[0] === ".jpg" ||
					match[0] === ".JPG" ||
					match[0] === ".jpeg" ||
					match[0] === ".JPEG"
				) {
					blob = new Blob([imgData.buffer], { type: "image/jpeg" });
				}
			}

			if (blob !== null) {
				setImgURL(URL.createObjectURL(blob));
			}
		}
	};

	useEffect(() => {
		initImg();
	}, []);

	return (
		<div className="flex divide-x-2">
			<div className="divide-y-2 max-w-sm px-4">
				<div className="py-2">
					<label className="block text-gray-600 text-sm font-normal py-2">
						Name
					</label>
					<p>{character.name}</p>
				</div>
				<div className="py-2">
					<label className="block text-gray-600 text-sm font-normal py-2">
						Description
					</label>
					<p>{character.description}</p>
				</div>
				<div className="py-2">
					<label className="block text-gray-600 text-sm font-normal py-2">
						Character Song
					</label>
					<p>{character.charSong}</p>
				</div>
			</div>
			{imgURL && (
				<div className="px-4">
					<div className="py-2">
						<label className="block text-gray-600 text-sm font-normal py-2">
							Image
						</label>
						<img src={imgURL} alt="Unable to view" />
					</div>
				</div>
			)}
		</div>
	);
};

export default StoryCharCard;
