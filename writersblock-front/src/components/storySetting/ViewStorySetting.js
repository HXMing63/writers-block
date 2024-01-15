import React, { useEffect, useState } from "react";
import AddStorySetting from "./AddStorySetting";
import StorySettingService from "../../services/StorySettingService";
import EditStorySetting from "./EditStorySetting";
import ViewAddPage from "../assets/template/ViewAddPageTemplate";
import ImageCard from "../assets/components/ImageCard";
import ImageService from "../../services/ImageService";
import ModalTemplate from "../assets/components/ModalTemplate";

const ViewStorySetting = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [storySettings, setStorySettings] = useState(null);
	const [modal, setModal] = useState({
		isVisible: false,
		storySetting: null,
	});

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await StorySettingService.getStorySettings();
			setStorySettings(response.data);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const deleteStorySetting = (e, id) => {
		e.preventDefault();

		StorySettingService.deleteStorySetting(id).then((res) => {
			setStorySettings((prevElement) => {
				return prevElement.filter((storySetting) => storySetting.id !== id);
			});
			setModal({isVisible: false});
		});
	};

	const editStorySetting = (storySetting) => {
		setModal({ isVisible: true, storySetting: storySetting });
	};

	const formatToCardTitle = (storySetting) => {
		return (
			<>
				<div className="w-28 truncate text-lg">{storySetting.place.name}</div>
				<div className="w-28 truncate text-xs text-gray-200 tracking-wider">
					{storySetting.time}
				</div>
			</>
		);
	};

	return (
		<ViewAddPage>
			<div className="flex flex-col">
				<div className="p-4 justify-start">
					<span className="text-thin-wider-2xl text-gray-200">View Story Settings</span>
				</div>
				<div className="flex flex-wrap justify-center">
					{isLoading ? (
						<div className="p-4 text-thin-wider-2xl text-gray-200">
							Loading...
						</div>
					) : (
						storySettings.map((storySetting) => (
							<div
								onClick={() => editStorySetting(storySetting)}
								key={storySetting.id}
							>
								<ImageCard
									imgSrc={ImageService.createImgURL(storySetting.place.img)}
									cardName={formatToCardTitle(storySetting)}
								/>
							</div>
						))
					)}
				</div>
			</div>
			<div className="w-fit mx-auto flex">
				<AddStorySetting fetchData={fetchData} />
			</div>
			<ModalTemplate
				isOpen={modal.isVisible}
				onClose={() => setModal({ isVisible: false })}
			>
				<EditStorySetting
					toEdit={modal.storySetting}
					setModal={setModal}
					fetchData={fetchData}
					deleteStorySetting={deleteStorySetting}
				/>
			</ModalTemplate>
		</ViewAddPage>
	);
};

export default ViewStorySetting;
