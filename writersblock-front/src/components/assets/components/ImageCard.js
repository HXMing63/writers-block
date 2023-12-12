import React from 'react'

const ImageCard = ({ imgSrc, cardName }) => {
  return (
    <div className='m-4 brand-card flex flex-col justify-center text-gray-200'>
        {imgSrc && (<div className='p-2'>
            <img src={imgSrc}></img>
        </div>)}
        <span className='text-thin-wider-2xl text-center'>{cardName}</span>
    </div>
  )
}

export default ImageCard