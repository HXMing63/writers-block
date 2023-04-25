import React, { useEffect, useState } from "react";
import PlaceService from "../../services/PlaceService";

const EditPlace = ({id, showModal, fetchData}) => {
  const [place, setPlace] = useState({
    id: id,
    img: "",
    name: "",
    description: "",
  });

  const updatePlace = (e) => {
    e.preventDefault();
    PlaceService.updatePlace(id, place)
      .then((response) => {
        fetchData();
        showModal({isVisible: false});
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChange = (e) => {
    let val;

    if (e.target.files) {
      val = e.target.files[0].name;
    } else {
      val = e.target.value;
    }
    setPlace({ ...place, [e.target.name]: val });
  };

  useEffect((id) => {
    const fetchDataById = async (id) => {
      try {
        const response = await PlaceService.getPlaceById(id);
        setPlace(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchDataById(id);
  }, []);

  return (
    <div className="flex flex-shrink max-w-md shadow border-b mx-auto bg-white">
      <div className="px-4 py-4">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Update Place</h1>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={place.name}
            onChange={(e) => handleChange(e)}
            className="rounded-md h-10 w-96 border mt-2 px-2 py-2"
          ></input>
        </div>
        <div className="items-center justify-center h-40 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Description
          </label>
          <textarea
            type="text"
            name="description"
            rows={5}
            value={place.description}
            onChange={(e) => handleChange(e)}
            className="rounded-md h-18 w-96 border mt-2 px-2 py-2"
          ></textarea>
        </div>
        <div className="items-center justify-center h-14 w-full my-4">
          <label className="block text-gray-600 text-sm font-normal">
            Image Source
          </label>
          <div className="mt-2 flex items-center gap-x-3">
            <input
              className="relative m-0 block w-full min-w-0 rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none file:-mx-3 file:-my-[0.32rem]  file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 hover:file:text-gray-600 "
              type="file"
              name="img"
              onChange={(e) => handleChange(e)}
              accept=".png,.jpg,.jpeg"
            ></input>
          </div>
          <p
            className="mt-1 text-sm text-gray-500 dark:text-gray-500"
            id="file_input_help"
          >
            PNG, or JPG only
          </p>
        </div>
        <div className="flex items-center justify-end h-14 w-full my-8 space-x-2 pt-4">
          <button
            className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
            onClick={() => showModal({isVisible: false})}
          >
            Cancel
          </button>
          <button
            className="rounded-md text-white font-semibold bg-green-400 px-2 py-2 hover:bg-green-700"
            onClick={updatePlace}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditPlace;
