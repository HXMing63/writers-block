import React, { useEffect, useState } from "react";
import PlaceService from "../../services/PlaceService";
import AddPlace from "./AddPlace";
import EditPlace from "./EditPlace";
import Place from "./Place";

const ViewPlace = () => {
  const [loading, setLoading] = useState(true);
  const [places, setPlaces] = useState(null);
  const [modal, showModal] = useState({
    isVisible: false,
    place: "",
  });
  const [sortOrder, setSortOrder] = useState({
    column: "",
    direction: "asc",
  });

  function handleSort(column) {
    setSortOrder({
      column: column,
      direction: sortOrder.direction === "asc" ? "desc" : "asc",
    });

    setPlaces((prevPlaces) =>
      prevPlaces.sort((a, b) => {
        const isDesc = sortOrder.direction === "desc" ? -1 : 1;
        const columnA = a[column].toUpperCase();
        const columnB = b[column].toUpperCase();
        let comparison = 0;
        
        if (columnA > columnB) {
          comparison = 1;
        } else if (columnA < columnB) {
          comparison = -1;
        }
        return comparison * isDesc;
      })
    );
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await PlaceService.getPlaces();
      setPlaces(response.data);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const editPlace = (e, place) => {
    e.preventDefault();
    showModal({ isVisible: true, place:place });
  };

  const deletePlace = (e, id) => {
    e.preventDefault();
    PlaceService.deletePlace(id).then((res) => {
      setPlaces((prevElement) => {
        return prevElement.filter((place) => place.id !== id);
      });
    });
  };

  return (
    <div className="container mx-auto flex flex-wrap max-w-fit overflow-x-hidden">
      <div className="grid grid-cols-1 2xl:grid-cols-3 gap-20 my-6">
        <div className="2xl:col-span-2 overflow-x-auto">
          <div className="px-4 font-thin text-2xl tracking-wider">
            <h1>Place View</h1>
          </div>
          <div className="flex shadow border-b my-4">
            <table className="min-w-full ">
              <thead className="bg-gray-200">
                <tr className="text-left font-medium text-gray-500 uppercase tracking-wider">
                  <th
                    className="py-3 px-6 cursor-pointer"
                    onClick={() => handleSort("name")}
                  >
                    Name
                    {sortOrder.column === "name" && (
                      <span>{sortOrder.direction === "asc" ? " ▲" : " ▼"}</span>
                    )}
                  </th>
                  <th
                    className="py-3 px-6 w-1/4 cursor-pointer"
                    onClick={() => handleSort("description")}
                  >
                    Description
                    {sortOrder.column === "description" && (
                      <span>{sortOrder.direction === "asc" ? " ▲" : " ▼"}</span>
                    )}
                  </th>
                  {/* Might be an issue with column name vs var name in Java (image vs img) */}
                  <th className="py-3 px-6">Image</th>
                  <th className="text-right py-3 px-6">Action</th>
                </tr>
              </thead>

              {!loading && (
                <tbody className="bg-white">
                  {places &&
                    places.map((place) => (
                      <Place
                        place={place}
                        deletePlace={deletePlace}
                        editPlace={editPlace}
                        key={place.id}
                      />
                    ))}
                </tbody>
              )}
            </table>
          </div>
        </div>
        <div className="2xl:col-span-1">
          <AddPlace fetchData={fetchData} />
        </div>
      </div>
      {modal.isVisible && (
        <div className="flex flex-shrink fixed inset-0 z-10 overflow-y-hidden overflow-x-hidden justify-center">
          <div className="fixed inset-0 w-full h-full bg-black opacity-40"></div>
          <div className="flex items-center min-h-screen px-4 py-8">
            <div className="relative max-w-fit mx-auto bg-white rounded-md shadow-lg">
              <EditPlace
                toEdit={modal.place}
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

export default ViewPlace;
