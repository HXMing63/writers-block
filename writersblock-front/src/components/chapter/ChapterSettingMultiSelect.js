import React, { useEffect, useRef, useState } from "react";
import StorySettingService from "../../services/StorySettingService";

const ChapterSettingMultiSelect = ({ chapter, setChapter, setModal }) => {
	const [query, setQuery] = useState("");
	const [selectedItems, setSelectedItems] = useState([
		...chapter.storySettings,
	]);
	const [listItems, setListItems] = useState([]);
	const [loading, setLoading] = useState(false);
	const isFirstRender = useRef(true);

	const fetchData = async () => {
		setLoading(true);

		try {
			const response = await StorySettingService.getStorySettings();
			setListItems(response.data);
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	const fetchDataExcept = async (ids) => {
		setLoading(true);

		try {
			const response = await StorySettingService.getStorySettingsExcept(ids);
			setListItems(response.data);
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	const fetchDataByNameExceptIds = async (name, ids) => {
		setLoading(true);

		try {
			const response = await StorySettingService.getStorySettingsByNameExcept(
				name,
				ids
			);
			setListItems(response.data);
		} catch (error) {
			console.log(error);
		}

		setLoading(false);
	};

	useEffect(() => {
		if (selectedItems.length === 0) {
			fetchData();
		} else {
			const ids = selectedItems.map((obj) => obj.id);
			fetchDataExcept(ids);
		}
	}, [selectedItems]);

	useEffect(() => {
		if (isFirstRender.current) {
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
			storySettings: selectedItems,
		}));
		setModal(false);
	};

	return (
		<div className="mx-auto p-4">
			<div className="flex flex-col md:flex-row">
				<div className="bg-transparent rounded p-4 shadow h-64 w-72">
					<h2 className="pb-2 text-thin-wider-2xl text-gray-200">
						Chosen Settings
					</h2>
					<ul className="max-h-56 my-scrollbar divide-y-2 divide-brand-lightest">
						{selectedItems.map((item, index) => (
							<li
								key={index}
								onClick={() => removeItemsSelect(item)}
								className={`mb-2 cursor-pointer text-gray-200 hover:text-brand-lightest flex justify-between text-ellipsis whitespace-nowrap overflow-hidden`}
							>
								{item.place.name}
								<span className="pl-12 pr-2 font-thin text-xs text-ellipsis whitespace-nowrap overflow-hidden text-slate-500">
									{item.time}
								</span>
							</li>
						))}
					</ul>
				</div>
				<div className="bg-transparent rounded p-4 shadow h-64 w-72">
					<h2 className="pb-2 text-thin-wider-2xl text-gray-200">
						Select a Setting
					</h2>
					<input
						type="text"
						value={query}
						onChange={handleSearch}
						placeholder="Search..."
						className="mb-2 bg-transparent text-gray-200 border-b border-brand-lightest focus:border-b focus:border-white focus:outline-0"
					/>
					<ul className="max-h-56 my-scrollbar divide-y-2 divide-brand-lightest">
						{!loading &&
							listItems.map((item, index) => (
								<li
									key={index}
									onClick={() => addItemsSelect(item)}
									className={`mb-2 cursor-pointer text-gray-200 hover:text-brand-lightest flex justify-between text-ellipsis whitespace-nowrap overflow-hidden`}
								>
									{item.place.name}
									<span className="pl-12 pr-2 font-thin text-xs text-ellipsis whitespace-nowrap overflow-hidden text-slate-500">
										{item.time}
									</span>
								</li>
							))}
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

export default ChapterSettingMultiSelect;
