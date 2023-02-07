import React from "react";
import { Link } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";

const items = [1, 2, 3, 4, 5];

const TopCharts = () => {
  return (
    <div className="flex flex-col p-3 min-w-[400px] max-h-[500px] m-5">
      <div className="flex flex-row justify-between mb-3">
        <h1 className="text-2xl font-bold flex items-center">Top Charts</h1>
        <Link
          to="/top-charts"
          className="text-lg flex items-center text-gray-400"
        >
          See more
        </Link>
      </div>
      <div className="w-full h-full flex flex-col">
        {items.map((item, index) => (
          <div key={index} className="flex flex-row items-center my-2">
            <h2>1.</h2>
            <img
              className="w-16 h-16 mx-3"
              src="https://images.genius.com/d902a0a48c2e7d097f2805c32d782fc9.640x640x1.jpg"
              alt="logo"
            />
            <div className="flex flex-col w-full">
              <h2 className="font-bold">Пушка</h2>
              <p>10AGE</p>
            </div>
            <AiFillPlayCircle size={48} className="cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCharts;
