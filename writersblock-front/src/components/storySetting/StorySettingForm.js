import React, { useEffect, useRef, useState } from "react";
import PlaceService from "../../services/PlaceService";

const StorySettingForm = ({storySetting, setStorySetting, query, setQuery, places, setPlaces, prev }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);

  const prevQuery = useRef("");

  useEffect(() => {
    prevQuery.current = prev;
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
    setSelectedPlace(null);
  };

  const handleKeyDown = (e) => {
    if (e.key === "ArrowDown" && selectedPlace !== places.length - 1) {
      setSelectedPlace(selectedPlace === null ? 0 : selectedPlace + 1);
    } else if (e.key === "ArrowUp" && selectedPlace !== 0) {
      setSelectedPlace(
        selectedPlace === null ? places.length - 1 : selectedPlace - 1
      );
    } else if (e.key === "Enter" && selectedPlace !== null) {
      handleSelectPlace(e, places[selectedPlace]);
    }
  };

  const handleChange = (e) => {
    e.preventDefault();

    const val = e.target.value;
    setStorySetting({ ...storySetting, [e.target.name]: val });
  };

  return (
    <>
      <div className="items-center justify-center h-14 w-full my-4">
        <label className="block text-gray-600 text-sm font-normal">Place</label>
        <input
          className="rounded-md h-10 w-96 border mt-2 px-2 py-2"
          type="text"
          name="place"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => handleKeyDown(e)}
        ></input>
        {places.length > 0 && (
          <div className="absolute z-10 w-96 mt-1 bg-white rounded-md shadow-lg">
            <ul className="py-2">
              {places.map((place, index) => (
                <li
                  key={place.id}
                  className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${selectedPlace === index ? "bg-gray-100" : ""}`}
                  onClick={(e) => handleSelectPlace(e, place)}
                >
                  {place.name}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="items-center justify-center h-14 w-full my-4 mt-10">
        <label className="block text-gray-600 text-sm font-normal">Time</label>
        <input
          type="text"
          name="time"
          value={storySetting.time}
          onChange={(e) => handleChange(e)}
          className="rounded-md h-10 w-96 border mt-2 px-2 py-2"
        ></input>
      </div>
    </>
  );
};

export default StorySettingForm;
