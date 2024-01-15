import React, { useState } from "react";
import StorySettingForm from "./StorySettingForm";
import StorySettingService from "../../services/StorySettingService";

const EditStorySetting = ({ toEdit, showModal, fetchData, deleteStorySetting }) => {
  const [query, setQuery] = useState(toEdit.place.name);
  const [places, setPlaces] = useState([]);
  const [storySetting, setStorySetting] = useState({
    id: toEdit.id,
    place: toEdit.place,
    time: toEdit.time,
  });

  const updateStorySetting = (e, storySetting) => {
    e.preventDefault();
    
    StorySettingService.updateStorySetting(storySetting.id, storySetting)
      .then((response) => {
        fetchData();
        showModal({ isVisible: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="mx-auto p-4">
        <div className="text-thin-wider-2xl text-gray-200">
          <h1>Edit Story Setting</h1>
        </div>
        <StorySettingForm
          storySetting={storySetting}
          setStorySetting={setStorySetting}
          query={query}
          setQuery={setQuery}
          places={places}
          setPlaces={setPlaces}
          prev={query}
        ></StorySettingForm>
        <div className="w-full pt-4 flex">
          <div className="w-full">
            <button className="btn-error" onClick={(e) => deleteStorySetting(e, storySetting.id)}>Delete</button>
          </div>
          <button className="btn-success" onClick={(e) => updateStorySetting(e, storySetting)}>Update</button>
        </div>
        {/* <div className="flex items-center justify-end h-14 w-full my-8 space-x-2 pt-4">
          <button
            className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
            onClick={() => showModal({ isVisible: false })}
          >
            Cancel
          </button>
          <button
            className="rounded-md text-white font-semibold bg-green-400 px-2 py-2 hover:bg-green-700"
            onClick={(e) => updateStorySetting(e, storySetting)}
          >
            Update
          </button>
        </div> */}
    </div>
  );
};

export default EditStorySetting;
