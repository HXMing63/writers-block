import React, { useEffect, useState } from "react";
import PlaceService from "../../services/PlaceService";
import AddPlace from "./AddPlace";
import EditPlace from "./EditPlace";
import ImageService from "../../services/ImageService";
import ImageCard from "../assets/components/ImageCard";
import ModalTemplate from "../assets/components/ModalTemplate";
import ViewAddPage from "../assets/template/ViewAddPageTemplate";

const ViewPlace = () => {
	const [isLoading, setIsLoading] = useState(true);
	const [places, setPlaces] = useState(null);
	const [modal, setModal] = useState({
		isVisible: false,
		place: null,
	});

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await PlaceService.getPlaces();
			setPlaces(response.data);
		} catch (error) {
			console.log(error);
		}
		setIsLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	const editPlace = (place) => {
		setModal({ isVisible: true, place: place });
	};

	const deletePlace = (e, id) => {
		e.preventDefault();

		PlaceService.deletePlace(id).then((res) => {
			setPlaces((prevElement) => {
				return prevElement.filter((place) => place.id !== id);
			});
		});

		setModal({ isVisible: false });
	};

	return (
		<ViewAddPage>
			<div className="flex flex-col">
				<div className="p-4 justify-start">
					<span className="text-thin-wider-2xl text-gray-200">View Places</span>
				</div>
				<div className="flex flex-wrap justify-center">
					{isLoading ? (
						<div className="p-4 text-thin-wider-2xl text-gray-200">
							Loading...
						</div>
					) : (
						places.map((place) => (
							<div onClick={() => editPlace(place)} key={place.id}>
								<ImageCard
									imgSrc={ImageService.createImgURL(place.img)}
									cardName={place.name}
								/>
							</div>
						))
					)}
				</div>
			</div>
			<div className="w-fit mx-auto flex">
				<AddPlace fetchData={fetchData}></AddPlace>
			</div>
			<ModalTemplate
				isOpen={modal.isVisible}
				onClose={() => setModal({ isVisible: false })}
			>
				<EditPlace
					toEdit={modal.place}
					setModal={setModal}
					fetchData={fetchData}
					deletePlace={deletePlace}
				/>
			</ModalTemplate>
		</ViewAddPage>
	);
};

export default ViewPlace;
