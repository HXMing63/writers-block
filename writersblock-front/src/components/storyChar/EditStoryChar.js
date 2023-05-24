import React, { useState } from "react";
import StoryCharForm from "./StoryCharForm";
import StoryCharService from "../../services/StoryCharService";

const EditStoryChar = ({ toEdit, showModal, fetchData }) => {
  const [storyChar, setStoryChar] = useState({
    id: toEdit.id,
    name: toEdit.name,
    description: toEdit.description,
    charSong: toEdit.charSong,
  });

  const updateStoryChar = (e, storyChar) => {
    e.preventDefault();
    StoryCharService.updateStoryChar(storyChar.id, storyChar)
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
          <h1>Edit Character</h1>
        </div>
        <StoryCharForm storyChar={storyChar} setStoryChar={setStoryChar}></StoryCharForm>
        <div className="flex items-center justify-end h-14 w-full my-8 space-x-2 pt-4">
          <button
            className="rounded-md text-white font-semibold bg-red-400 px-2 py-2 hover:bg-red-700"
            onClick={() => showModal({ isVisible: false })}
          >
            Cancel
          </button>
          <button
            className="rounded-md text-white font-semibold bg-green-400 px-2 py-2 hover:bg-green-700"
            onClick={(e) => updateStoryChar(e, storyChar)}
          >
            Update
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditStoryChar;
