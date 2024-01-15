import React from 'react'

const ImageCard = ({ imgSrc, cardName }) => {
  return (
    <div className='m-4 brand-card flex flex-col justify-center text-gray-200'>
        {imgSrc && (<div className='p-2'>
            <img className='object-scale-down max-h-20 rounded-md' src={imgSrc} ></img>
        </div>)}
        <div className='w-28 truncate text-thin-wider-2xl text-center'>{cardName}</div>
    </div>
  )
}

export default ImageCard