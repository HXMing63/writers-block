import React, { useEffect, useRef, useState } from "react";
import StorySettingService from "../../services/StorySettingService";
import StorySettingForm from "./StorySettingForm";

const AddStorySetting = ({ fetchData }) => {
  const [query, setQuery] = useState("");
  const [places, setPlaces] = useState([]);
  const [storySetting, setStorySetting] = useState({
    id: "",
    place: null,
    time: "",
  });

  const saveStorySetting = (e) => {
    e.preventDefault();

    StorySettingService.saveStorySetting(storySetting)
      .then((response) => {
        console.log(response);
        fetchData();
        resetForm();
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

  return (
    <div className="flex flex-shrink max-w-md shadow border-b mx-auto">
      <div className="px-4 py-4">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Setting</h1>
        </div>
        <StorySettingForm
          storySetting={storySetting}
          setStorySetting={setStorySetting}
          query={query}
          setQuery={setQuery}
          places={places}
          setPlaces={setPlaces}
          prev={""}
        ></StorySettingForm>
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
