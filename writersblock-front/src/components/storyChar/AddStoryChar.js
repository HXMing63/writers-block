import React, { useState } from "react";
import StoryCharForm from "./StoryCharForm";
import StoryCharService from "../../services/StoryCharService";

const AddStoryChar = () => {
  const [storyChar, setStoryChar] = useState({
    id: "",
    name: "",
    description: "",
    charSong: "",
    fileInputKey: Date.now(),
  });

  const saveStoryChar = (e) => {
    e.preventDefault();

    StoryCharService.saveStoryChar(storyChar)
      .then((response) => {
        console.log(response);
        resetForm();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const resetForm = () => {
    setStoryChar({
      id: "",
      name: "",
      description: "",
      charSong: "",
      fileInputKey: Date.now(),
    });
  };

  return (
    <div className="flex flex-shrink max-w-md shadow border-b mx-auto">
      <div className="px-4 py-4">
        <div className="font-thin text-2xl tracking-wider">
          <h1>Add New Character</h1>
        </div>
        <StoryCharForm
          storyChar={storyChar}
          setStoryChar={setStoryChar}
        ></StoryCharForm>
        <div className="flex items-center justify-end h-14 w-full my-8 space-x-2 pt-4">
          <button
            className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
            onClick={resetForm}
          >
            Clear
          </button>
          <button
            className="rounded-md text-white font-semibold bg-green-400 px-2 py-2 hover:bg-green-700"
            onClick={(e) => saveStoryChar(e)}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddStoryChar;