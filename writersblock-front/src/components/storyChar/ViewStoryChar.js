import React, { useEffect, useState } from "react";
import AddStoryChar from "./AddStoryChar";
import StoryCharService from "../../services/StoryCharService";
import EditStoryChar from "./EditStoryChar";
import ViewAddPage from "../assets/template/ViewAddPageTemplate";
import ImageCard from "../assets/components/ImageCard";
import ImageService from "../../services/ImageService";
import ModalTemplate from "../assets/components/ModalTemplate";

const ViewStoryChar = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [storyChars, setStoryChars] = useState([]);
	const [modal, setModal] = useState({
		isVisible: false,
		storyChar: null,
	});

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await StoryCharService.getStoryChars();
			setStoryChars(response.data);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	const editStoryChar = (storyChar) => {
		setModal({ isVisible: true, storyChar: storyChar });
	};

	const deleteStoryChar = (e, id) => {
		e.preventDefault();
		StoryCharService.deleteStoryChar(id).then((res) => {
			setStoryChars((prevElement) => {
				return prevElement.filter((storyChar) => storyChar.id !== id);
			});
			setModal({isVisible: false});
		});
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<ViewAddPage>
			<div className="flex flex-col">
				<div className="p-4 justify-start">
					<span className="text-thin-wider-2xl text-gray-200">View Characters</span>
				</div>
				<div className="flex flex-wrap justify-center">
					{isLoading ? (
						<div className="p-4 text-thin-wider-2xl text-gray-200">
							Loading...
						</div>
					) : (
						storyChars.map((storyChar) => (
							<div onClick={() => editStoryChar(storyChar)} key={storyChar.id}>
								<ImageCard
									imgSrc={ImageService.createImgURL(storyChar.img)}
									cardName={storyChar.name}
								/>
							</div>
						))
					)}
				</div>
			</div>
			<div className="w-fit mx-auto flex">
				<AddStoryChar fetchData={fetchData} />
			</div>
			<ModalTemplate
				isOpen={modal.isVisible}
				onClose={() => setModal({ isVisible: false })}
			>
				<EditStoryChar
					toEdit={modal.storyChar}
					setModal={setModal}
					fetchData={fetchData}
					deleteStoryChar={deleteStoryChar}
				/>
			</ModalTemplate>
		</ViewAddPage>
	);
};

export default ViewStoryChar;
