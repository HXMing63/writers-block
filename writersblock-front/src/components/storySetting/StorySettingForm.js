import React, { useEffect, useRef } from "react";
import PlaceService from "../../services/PlaceService";
import InputFieldSuggestion from "../assets/components/InputFieldSuggestion";
import InputField from "../assets/components/InputField";

const StorySettingForm = ({
	storySetting,
	setStorySetting,
	query,
	setQuery,
	places,
	setPlaces,
}) => {
	const prevQuery = useRef("");

	useEffect(() => {
		prevQuery.current = "";
	}, []);

	useEffect(() => {
		if (prevQuery.current === query) {
			return;
		} else {
			prevQuery.current = query;
		}

		if (query) {
			fetchDataByName(query);
		} else {
			setPlaces([]);
		}
	}, [query]);

	const fetchDataByName = async (name) => {
		try {
			const response = await PlaceService.getPlacesByName(name);
			setPlaces(response.data);
		} catch (error) {
			console.log(error);
		}
	};

	const handleSelectPlace = (e, place) => {
		e.preventDefault();

		setQuery(place.name);
		prevQuery.current = place.name;
		setStorySetting({ ...storySetting, place: place });
		setPlaces([]);
	};

	const handleChange = (e) => {
		setStorySetting({ ...storySetting, [e.target.name]: e.target.value });
	};

	return (
		<>
			<InputFieldSuggestion
				label={"Place"}
				propName={"place"}
				propVal={query}
				propOnChange={(e) => setQuery(e.target.value)}
				items={places}
				handleSelectItem={handleSelectPlace}
				placeholderText={"Enter place here..."}
			/>
			<InputField
				label={"Time"}
				propName={"time"}
				propVal={storySetting.time}
				propOnChange={handleChange}
				placeholderText={"Enter time here..."}
			/>
		</>
	);
};

export default StorySettingForm;
