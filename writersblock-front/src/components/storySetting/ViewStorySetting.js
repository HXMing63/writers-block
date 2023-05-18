import React, { useEffect, useState } from "react";
import AddStorySetting from "./AddStorySetting";
import StorySetting from "./StorySetting";
import StorySettingService from "../../services/StorySettingService";
import EditStorySetting from "./EditStorySetting";

const ViewStorySetting = () => {
  const [loading, setLoading] = useState(true);
  const [storySettings, setStorySettings] = useState(null);
  const [sortOrder, setSortOrder] = useState({
    column: "",
    direction: "asc",
  });
  const [modal, showModal] = useState({
    isVisible: false,
    storySetting: null,
  });

  const handleSort = (column) => {};

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await StorySettingService.getStorySettings();
      setStorySettings(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const deleteStorySetting = (e, id) => {
    e.preventDefault();

    StorySettingService.deleteStorySetting(id).then((res) => {
      setStorySettings((prevElement) => {
        return prevElement.filter((storySetting) => storySetting.id !== id);
      });
    });
  }

  const editStorySetting = (e, storySetting) => {
    e.preventDefault();

    showModal({isVisible: true, storySetting:storySetting});
  }

  return (
    <div className="container mx-auto flex flex-wrap max-w-fit overflow-x-hidden">
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-20 my-6">
        <div className="2xl:col-span-2 overflow-x-auto">
          <div className="px-4 font-thin text-2xl tracking-wider">
            <h1>Story Setting View</h1>
          </div>
          <div className="flex shadow border-b my-4">
            <table className="min-w-full ">
              <thead className="bg-gray-200">
                <tr className="text-left font-medium text-gray-500 uppercase tracking-wider">
                  <th
                    className="py-3 px-6 cursor-pointer"
                    onClick={() => handleSort("place")}
                  >
                    Place
                    {sortOrder.column === "place" && (
                      <span>{sortOrder.direction === "asc" ? " ▲" : " ▼"}</span>
                    )}
                  </th>
                  <th
                    className="py-3 px-6 w-1/4 cursor-pointer"
                    onClick={() => handleSort("time")}
                  >
                    Time
                    {sortOrder.column === "time" && (
                      <span>{sortOrder.direction === "asc" ? " ▲" : " ▼"}</span>
                    )}
                  </th>
                  <th className="text-right py-3 px-6">Action</th>
                </tr>
              </thead>

              {!loading && (
                <tbody className="bg-white">
                  {storySettings &&
                    storySettings.map((storySetting) => (
                      <StorySetting
                        storySetting={storySetting}
                        deleteStorySetting={deleteStorySetting}
                        editStorySetting={editStorySetting}
                        key={storySetting.id}
                      />
                    ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="2xl:col-span-1">
          <AddStorySetting fetchData={fetchData} />
        </div>
      </div>
      {modal.isVisible && (
        <div className="flex flex-shrink fixed inset-0 z-10 overflow-y-hidden overflow-x-hidden justify-center">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative max-w-fit mx-auto bg-white rounded-md shadow-lg">
              <EditStorySetting
                toEdit={modal.storySetting}
                showModal={showModal}
                fetchData={fetchData}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewStorySetting;
