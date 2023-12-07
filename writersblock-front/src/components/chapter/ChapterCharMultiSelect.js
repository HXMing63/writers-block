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
    <div className="mx-auto p-4">
      <div className="flex flex-col md:flex-row">
        <div className="bg-transparent rounded p-4 shadow h-64 w-72">
          <h2 className="pb-2 text-thin-wider-2xl text-gray-200">
            Chosen Characters
          </h2>
          <ul className="max-h-56 my-scrollbar">
            {selectedItems.map((item, index) => (
              <li
                key={index}
                onClick={() => removeItemsSelect(item)}
                className={`mb-2 cursor-pointer text-gray-200 hover:text-brand-lightest text-ellipsis whitespace-nowrap overflow-hidden`}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-transparent rounded p-4 md:border-l border-t md:border-t-0 border-brand-lightest h-72 w-72">
          <h2 className="pb-2 text-thin-wider-2xl text-gray-200">
            Select a Character
          </h2>
          <input
            type="text"
            value={query}
            onChange={handleSearch}
            placeholder="Search..."
            className="mb-2 text-gray-200 bg-transparent border-b border-brand-lightest focus:border-b focus:border-white focus:outline-0"
          />
          <ul className="max-h-56 my-scrollbar">
            {!loading && (listItems.map((item, index) => (
              <li
                key={index}
                onClick={() => addItemsSelect(item)}
                className={`mb-2 cursor-pointer text-gray-200 hover:text-brand-lightest text-ellipsis whitespace-nowrap overflow-hidden`}
              >
                {item.name}
              </li>
            )))}
          </ul>
        </div>
      </div>
      <div className="flex items-center justify-end h-14 w-full space-x-2 pt-4">
        <button
          className="btn-darkest"
          onClick={() => setModal(false)}
        >
          Cancel
        </button>
        <button
          className="btn-error"
          onClick={removeAllItems}
        >
          Clear All
        </button>
        <button
          className="btn-transparent"
          onClick={addAllItems}
        >
          Select All
        </button>
        <button
          className="btn-success"
          onClick={(e) => saveList(e, selectedItems)}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default ChapterCharMultiSelect;
