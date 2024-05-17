import React from 'react'
import { IMAGE_CDN_URL } from '../utils/constants'

const MovieCard = ({imgPath}) => {
  if(!imgPath) return null;
  return (
    <div className='w-32 md:w-36 pr-4'>
        <img 
        alt='Movie Image'
        src={IMAGE_CDN_URL + imgPath}
        />
    </div>
  )
}

export default MovieCard