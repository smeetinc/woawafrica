import React, { useState, useRef } from "react";
import { IoSearch } from "react-icons/io5";

function Hero() {
  const [hovered, setHovered] = useState(false);
  const videoRef = useRef(null);

  const playVideo = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const pauseVideo = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <div className="h-screen relative overflow-hidden bg-neutral-500">
      <img
        src="/assets/hero2.png"
        className={`absolute top-1/3 right-0 z-10 ${
          hovered ? "opacity-0 delay-300" : "opacity-100"
        } transition-opacity ease-in-out duration-500`}
        alt="rotate thumbnail"
      />
      <div className="absolute top-9/12 left-8 flex h-20 items-center w-9/12 rounded-lg z-10 rounded-s-lg shadow-md">
        <div className="flex items-center bg-white w-10/12 h-full py-3 pl-2 rounded-s-lg">
          <div className="flex flex-col w-full">
            <label htmlFor="keywords" className="font-bold font-Lora">
              Keywords
            </label>
            <input
              type="text"
              id="keywords"
              name="keywords"
              placeholder="Type keywords"
              className="focus:outline-0 text-shades-400"
            />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="destinations" className="font-bold font-Lora">
              Destinations
            </label>
            <select id="destinations" name="destinations">
              <option value="Any" className="text-shades-400">
                Any
              </option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
              <option value="Option3">Option 3</option>
            </select>
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="duration" className="font-bold font-Lora">
              Duration
            </label>
            <select id="duration" name="duration">
              <option value="Any" className="text-shades-400">
                Any
              </option>
              <option value="Option1">Option 1</option>
              <option value="Option2">Option 2</option>
              <option value="Option3">Option 3</option>
            </select>
          </div>
        </div>
        <div className="bg-green-700 w-2/12 h-full py-2 rounded-r-lg">
          <div className="flex flex-col bg-green-700 text-white w-full justify-center items-center h-full">
            <IoSearch size={30} />
            <button>Search now</button>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-between items-center px-8">
        <div className="max-w-696">
          <h1 className="font-bold text-7xl">
            Discover the <span className="text-secondary-300">Wonders</span> of
            Africa with WoawAfrica.
          </h1>
          <p className="text-lg font-Lora my-2">
            Unleash your wanderlust as WoawAfrica takes you on an extraordinary
            voyage through the heart of Africa. Immerse yourself in the
            captivating wonders, rich cultures, and breathtaking landscapes that
            await. Your journey begins here – where every experience is an
            invitation to explore the extraordinary.
          </p>
        </div>
        <div className="relative group mt-10">
          <div
            className="cursor-pointer transition-opacity ease-in duration-1000 w-full flex justify-start"
            onMouseEnter={() => {
              setHovered(true);
              playVideo();
            }}
            onMouseLeave={() => {
              setHovered(false);
              pauseVideo();
            }}
          >
            <video
              ref={videoRef}
              className={`w-450 justify-self-start mr-20 h-600 object-cover rounded-lg ${
                hovered
                  ? "opacity-100 scale-105 ease-in duration-1000"
                  : "opacity-100 scale-100"
              }`}
              loop
              muted
            >
              <source src="/assets/herovid3.mp4" type="video/mp4" />
              {/* Add additional source elements for other video formats if needed */}
              Your browser does not support the video tag.
            </video>

            <img
              src="/assets/play.png"
              className={`absolute top-1/2 left-1/3 ${
                hovered ? "opacity-0" : "opacity-100"
              } transition-opacity duration-700`}
              alt="play button"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
