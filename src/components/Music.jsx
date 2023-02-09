import React from "react";
import { TfiReload } from "react-icons/tfi";
import { BiSkipPrevious, BiSkipNext } from "react-icons/bi";
import { FaPlay } from "react-icons/fa";
import { BsShuffle } from "react-icons/bs";

const Music = () => {
  const [prog, setProg] = React.useState(0);


  return (
    <div className="flex flex-col">
      <div className="flex flex-row items-center">
        <TfiReload className="text-red-600 h-5 w-5 cursor-pointer" />
        <BiSkipPrevious className="text-cyan-400 h-10 w-10 cursor-pointer mx-10" />
        <FaPlay className="text-cyan-400 h-7 w-7 cursor-pointer" />
        <BiSkipNext className="text-cyan-400 h-10 w-10 cursor-pointer mx-10" />
        <BsShuffle className="text-red-600 h-5 w-5 cursor-pointer" />
      </div>
      <div className="flex flex-row justify-center items-center mt-1">
        <p>0:00</p>
        {/* <div className="w-full h-1 bg-white rounded-xl mx-3"> */}
        {/* <div
            className={`relative w-[${prog}%] h-full bg-cyan-400 rounded-l-xl`}
          >
            <div className="h-4 w-4 rounded-full bg-cyan-400 absolute -top-[6px] -right-[6px] cursor-pointer"></div>
          </div> */}
        <input
          className="full h-1 bg-white rounded-xl mx-3"
          type="range"
          value={prog}
          onChange={(e) => {
            setProg(e.target.value);
          }}
        />
        {/* </div> */}
        <p>3:00</p>
      </div>
    </div>
  );
};

export default Music;
