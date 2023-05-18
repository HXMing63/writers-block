import React from 'react'

const StorySetting = ({ storySetting, deleteStorySetting, editStorySetting }) => {
    return (
        <tr
          key={storySetting.id}
          className="text-left text-sm text-gray-500 uppercase tracking-wider"
        >
          <td className="py-3 px-6 align-top max-w-xs break-words">
            <div>{storySetting.place.name}</div>
          </td>
          <td className="py-3 px-6 align-top max-w-xs break-words">
            <div>{storySetting.time}</div>
          </td>
          <td className="text-right py-3 px-6 align-top whitespace-nowrap font-medium">
            <a
              onClick={(e) => editStorySetting(e, storySetting)}
              className="text-indigo-400 hover:text-indigo-800 px-4 hover:cursor-pointer"
            >
              Edit
            </a>
            <a
              onClick={(e) => deleteStorySetting(e, storySetting.id)}
              className="text-red-400 hover:text-red-800 hover:cursor-pointer"
            >
              Delete
            </a>
          </td>
        </tr>
      );
}

export default StorySetting