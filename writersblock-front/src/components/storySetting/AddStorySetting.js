import React, { useEffect, useRef, useState } from "react";
import PlaceService from "../../services/PlaceService";
import StorySettingService from "../../services/StorySettingService";

const AddStorySetting = () => {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [storySetting, setStorySetting] = useState({
    id: "",
    place: null,
    time: ""
  });

  const prevQuery = useRef("");

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

  function handleSelectPlace(e, place) {
    e.preventDefault();

    setQuery(place.name);
    prevQuery.current = place.name;
    setStorySetting({ ...storySetting, place: place });
    setPlaces([]);
    setSelectedPlace(null);
  }

  const saveStorySetting = (e) => {
    e.preventDefault();
    
    StorySettingService.saveStorySetting(storySetting)
      .then((response) => {
        console.log(response);
        resetForm(e);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetForm = (e) => {
    e.preventDefault();
    setStorySetting({
      id: "",
      place: null,
      time: "",
    });
    setQuery("");
  };

  const fetchDataByName = async (name) => {
    try {
      const response = await PlaceService.getPlacesByName(name);
      setPlaces(response.data);
    } catch (error) {
      console.log(error);
    }
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
    <div className="flex flex-shrink max-w-md shadow border-b mx-auto">
      <div className="px-4 py-4">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Setting</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Place
          </label>
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
                    className={`px-3 py-1 hover:bg-gray-100 cursor-pointer ${
                      selectedPlace === index ? "bg-gray-100" : ""
                    }`}
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
          <label className="block text-gray-600 text-sm font-normal">
            Time
          </label>
          <input
            type="text"
            name="time"
            value={storySetting.time}
            onChange={(e) => handleChange(e)}
            className="rounded-md h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="flex items-center justify-end h-14 w-full my-8 space-x-2 pt-4">
          <button
            className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
            onClick={resetForm}
          >
            Clear
          </button>
          <button
            className="rounded-md text-white font-semibold bg-green-400 px-2 py-2 hover:bg-green-700"
            onClick={saveStorySetting}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStorySetting;
