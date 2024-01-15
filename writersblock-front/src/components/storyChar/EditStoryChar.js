import React, { useState } from "react";
import StoryCharForm from "./StoryCharForm";
import StoryCharService from "../../services/StoryCharService";

const EditStoryChar = ({ toEdit, showModal, fetchData, deleteStoryChar }) => {
  const [storyChar, setStoryChar] = useState({
    id: toEdit.id,
    name: toEdit.name,
    description: toEdit.description,
    charSong: toEdit.charSong,
    img: toEdit.img
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
    <div className="mx-auto p-4">
      <div className="text-thin-wider-2xl text-gray-200">
        <h1>Edit Character</h1>
      </div>
      <StoryCharForm storyChar={storyChar} setStoryChar={setStoryChar}></StoryCharForm>
      <div className="w-full pt-4 flex">
        <div className="w-full">
          <button className="btn-error" onClick={(e) => deleteStoryChar(e, storyChar.id)}>Delete</button>
        </div>
        <button className="btn-success" onClick={(e) => updateStoryChar(e, storyChar)}>Update</button>
      </div>
    </div>
  );
};

export default EditStoryChar;
