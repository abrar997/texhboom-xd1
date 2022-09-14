import React from "react";
import { Link } from "react-router-dom";

const Gallery = () => {
  const [activeNav, setactiveNav] = React.useState("music");

  return (
    <div className="flex flex-col  mt-[50px] h-[74px]">
      <div className="flex justify-start border-b-2  text-[20px]  text-border font-semibold border-border ">
        <button
          onClick={() => setactiveNav("music")}
          className={activeNav === "music" ? "text-gray ml-5" : " ml:0 xl:ml-5"}
        >
          Music
        </button>
        <button
          onClick={() => setactiveNav("videos")}
          className={activeNav === "videos" ? "text-gray ml-5" : " ml-5"}
        >Videos</button>
        <button 
          onClick={() => setactiveNav("play")}
          className={activeNav === "play" ? "text-gray ml-5" : " ml-5"}
        >Playlists</button>
      </div>
      <p className="xl:ml-4 text-[20px] leading-20 text-secondary font-semibold ">
        Category:
        <span className=" text-primary ml-1  border-b-[1px] ">
          <Link to="/">Trending</Link>
        </span>
      </p>
    </div>
  );
};

export default Gallery;
