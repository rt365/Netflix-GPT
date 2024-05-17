import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const { gptMovies, movieNames } = useSelector(store => store.gpt);
  return (
    <div className='p-4 m-4 bg-black text-white bg-opacity-90'>
      <div>
        {movieNames?.map((movieName, index) => {
         return <MovieList key={movieName} title={movieName} movies={gptMovies[index]} />
        })}
      </div>
    </div>
  )
}

export default GptMovieSuggestion;