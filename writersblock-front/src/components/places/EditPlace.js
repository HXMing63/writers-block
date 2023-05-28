import React, { useState } from "react";
import PlaceService from "../../services/PlaceService";
import PlaceForm from "./PlaceForm";

const EditPlace = ({ toEdit, showModal, fetchData }) => {
  const [place, setPlace] = useState({
    id: toEdit.id,
    img: toEdit.img,
    name: toEdit.name,
    description: toEdit.description,
  });

  const updatePlace = (e, place) => {
    e.preventDefault();
    PlaceService.updatePlace(place.id, place)
      .then((response) => {
        fetchData();
        showModal({ isVisible: false });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex flex-shrink max-w-md shadow border-b mx-auto bg-white">
      <div className="px-4 py-4">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Edit Place</h1>
        </div>
        <PlaceForm place={place} setPlace={setPlace}></PlaceForm>
        <div className="flex items-center justify-end h-14 w-full my-8 space-x-2 pt-4">
          <button
            className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
            onClick={() => showModal({ isVisible: false })}
          >
            Cancel
          </button>
          <button
            className="rounded-md text-white font-semibold bg-green-400 px-2 py-2 hover:bg-green-700"
            onClick={(e) => updatePlace(e, place)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPlace;
