import React from "react";
// import { useNavigate } from "react-router-dom";

const Place = ({ place, deletePlace, editPlace }) => {
  // const navigate = useNavigate();

  //   const editPlace = (e, id) => {
  //     e.preventDefault();
  //     navigate(`/editPlace/${id}`);
  //   };

  return (
    <tr
      key={place.id}
      className="text-left text-sm text-gray-500 uppercase tracking-wider"
    >
      <td className="py-3 px-6 whitespace-nowrap">
        <div>{place.name}</div>
      </td>
      <td className="py-3 px-6 whitespace-nowrap">
        <div>{place.description}</div>
      </td>
      <td className="py-3 px-6 whitespace-nowrap">
        <div>{place.img}</div>
      </td>
      <td className="text-right py-3 px-6 whitespace-nowrap font-medium">
        <a
          onClick={(e, id) => editPlace(e, place.id)}
          className="text-indigo-400 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e, id) => deletePlace(e, place.id)}
          className="text-red-400 hover:text-red-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  );
};

export default Place;
