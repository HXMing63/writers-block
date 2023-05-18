import React, { useState } from "react";
import PlaceService from "../../services/PlaceService";
import PlaceForm from "./PlaceForm";

const AddPlace = ({ fetchData }) => {
  const [place, setPlace] = useState({
    id: "",
    img: "",
    name: "",
    description: "",
    fileInputKey: Date.now(),
  });

  const savePlace = (e) => {
    e.preventDefault();
    PlaceService.savePlace(place)
      .then((response) => {
        console.log(response);
        fetchData();
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetForm = () => {
    setPlace({
      id: "",
      img: "",
      name: "",
      description: "",
      fileInputKey: Date.now(),
    });
  };

  return (
    <div className="flex flex-shrink max-w-md shadow border-b mx-auto">
      <div className="px-4 py-4">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Place</h1>
        </div>
        <PlaceForm place={place} setPlace={setPlace}></PlaceForm>
        <div className="flex items-center justify-end h-14 w-full my-8 space-x-2 pt-4">
          <button
            className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
            onClick={resetForm}
          >
            Clear
          </button>
          <button
            className="rounded-md text-white font-semibold bg-green-400 px-2 py-2 hover:bg-green-700"
            onClick={e => savePlace(e)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddPlace;
