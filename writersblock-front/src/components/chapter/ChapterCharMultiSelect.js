import React, { useEffect, useRef, useState } from "react";
import StoryCharService from "../../services/StoryCharService";

const ChapterCharMultiSelect = ({ chapter, setChapter, setModal }) => {
  const [query, setQuery] = useState("");
  const [selectedItems, setSelectedItems] = useState([...chapter.storyChars]);
  const [listItems, setListItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const isFirstRender = useRef(true);

  const fetchData = async () => {
    setLoading(true);

    try {
      const response = await StoryCharService.getStoryChars();
      setListItems(response.data);
    } catch (error) {
      console.log(error);
    }

    setLoading(false);
  };

  const fetchDataExcept = async (ids) => {
    setLoading(true);

    try{
      const response = await StoryCharService.getStoryCharsExcept(ids);
      setListItems(response.data);
    } catch (error){
      console.log(error);
    }

    setLoading(false);
  };

  const fetchDataByNameExceptIds = async (name, ids) => {
    setLoading(true);

    try{
      const response = await StoryCharService.getStoryCharsByNameExcept(name, ids);
      setListItems(response.data);
    } catch (error){
      console.log(error);
    }

    setLoading(false);

  };

  useEffect(() => {
    if (selectedItems.length === 0){
      fetchData();
    } else {
      const ids = selectedItems.map((obj) => obj.id);
      fetchDataExcept(ids);
    }
  }, [selectedItems]);

  useEffect(() => {
    if (isFirstRender.current){
      isFirstRender.current = false;
      return;
    }

    const ids = selectedItems.map((obj) => obj.id);
    fetchDataByNameExceptIds(query, ids);
  }, [query, selectedItems]);

  const handleSearch = (event) => {
    setQuery(event.target.value);
  };

  const addItemsSelect = (item) => {
    if (!selectedItems.includes(item)) {
      setSelectedItems([...selectedItems, item]);
      setListItems(listItems.filter((listItem) => listItem !== item));
    }
  };

  const removeItemsSelect = (item) => {
    if (!listItems.includes(item)) {
      setListItems([...listItems, item]);
      setSelectedItems(
        selectedItems.filter((selectedItem) => selectedItem !== item)
      );
    }
  };

  const addAllItems = () => {    
    setSelectedItems([...selectedItems, ...listItems]); 
    setListItems([]);
  };

  const removeAllItems = () => {
    setListItems([...listItems, ...selectedItems]);
    setSelectedItems([]);
  };

  const saveList = (e, selectedItems) => {
    e.preventDefault();
    setChapter((prevChapter) => ({
      ...prevChapter,
      storyChars: selectedItems
    }));

    setModal(false);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="bg-white rounded p-4 shadow h-80 w-72">
          <h2 className="pb-2 font-thin text-2xl tracking-wider">
            Chosen Characters
          </h2>
          <ul className="max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {selectedItems.map((item, index) => (
              <li
                key={index}
                onClick={() => removeItemsSelect(item)}
                className={`mb-2 cursor-pointer hover:text-slate-500 text-ellipsis whitespace-nowrap overflow-hidden`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white rounded p-4 shadow h-80 w-72">
          <h2 className="pb-2 font-thin text-2xl tracking-wider">
            Select a Character
          </h2>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search..."
            className="mb-2 border-b border-slate-300 focus:border-b focus:border-slate-700 focus:outline-0"
          />
          <ul className="max-h-56 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            {!loading && (listItems.map((item, index) => (
              <li
                key={index}
                onClick={() => addItemsSelect(item)}
                className={`mb-2 cursor-pointer hover:text-slate-500 text-ellipsis whitespace-nowrap overflow-hidden`}
              >
                {item.name}
              </li>
            )))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-end h-14 w-full space-x-2 pt-4">
        <button
          className="rounded-md text-white font-thin bg-red-400 px-2 py-2 hover:bg-red-700"
          onClick={() => setModal(false)}
        >
          Cancel
        </button>
        <button
          className="rounded-md text-white font-thin bg-gray-400 px-2 py-2 hover:bg-gray-700"
          onClick={removeAllItems}
        >
          Clear All
        </button>
        <button
          className="rounded-md text-white font-thin bg-blue-400 px-2 py-2 hover:bg-blue-700"
          onClick={addAllItems}
        >
          Select All
        </button>
        <button
          className="rounded-md text-white font-thin bg-green-400 px-2 py-2 hover:bg-green-700"
          onClick={(e) => saveList(e, selectedItems)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ChapterCharMultiSelect;
