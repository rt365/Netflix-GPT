import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrendingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTrendingMovies = () => {
    const dispatch = useDispatch();

  const fetchTrendingMovies = async () => {
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
    const json = await data.json();
    // console.log(json.results);
    dispatch(addTrendingMovies(json.results));
  }

  useEffect(() => {
    fetchTrendingMovies();
  },[]);
}

export default useTrendingMovies;