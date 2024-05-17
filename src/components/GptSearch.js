import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_URL } from "../utils/constants";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img className="h-screen md:w-screen object-cover" src={BG_URL} alt="bg_img" />
      </div>
    <div>
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
    </>
  );
};

export default GptSearch;
