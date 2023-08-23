import React from 'react'

const StoryChar = ({ storyChar, editStoryChar, deleteStoryChar}) => {
  return (
    <tr
      key={storyChar.id}
      className="text-left text-sm text-gray-500 uppercase tracking-wider"
    >
      <td className="py-3 px-6 w-1/10 whitespace-wrap">
        <div>{storyChar.name}</div>
      </td>
      <td className="py-3 px-6 w-6/10 whitespace-wrap">
        <div>{storyChar.description}</div>
      </td>
      <td className="py-3 px-6 w-1/10 whitespace-wrap">
        <div>{storyChar.charSong}</div>
      </td>
      <td className="py-3 px-6 w-1/10 whitespace-wrap">
        <div>{storyChar.img ? storyChar.img.name : "Empty"}</div>
      </td>
      <td className="text-right py-3 px-6 w-1/10 whitespace-wrap font-medium">
        <a
          onClick={(e) => editStoryChar(e, storyChar)}
          className="text-indigo-400 hover:text-indigo-800 px-4 hover:cursor-pointer"
        >
          Edit
        </a>
        <a
          onClick={(e) => deleteStoryChar(e, storyChar.id)}
          className="text-red-400 hover:text-red-800 hover:cursor-pointer"
        >
          Delete
        </a>
      </td>
    </tr>
  )
}

export default StoryChar