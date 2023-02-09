import React from "react";
import { genres } from "../assets/constants";
import { IoIosArrowDown } from "react-icons/io";

const SelectType = () => {
  const [currentGenre, setCurrentGenre] = React.useState("pop");
  const [isActive, setIsActive] = React.useState(false);

  const onChangeGen = (item) => {
    setCurrentGenre(item.title);
    setIsActive(false);
  };

  return (
    <div className="relative w-28 z-10">
      <div
        onClick={() => {
          setIsActive(!isActive);
        }}
        className="w-full absolute bg-black rounded-sm color-white flex flex-row justify-between items-center p-2 cursor-pointer"
      >
        <p>{currentGenre}</p>
        <IoIosArrowDown
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`cursor-pointer ${isActive && "rotate-180"}`}
          size={18}
        />
      </div>
      {isActive && (
        <div className="w-full absolute top-10 flex flex-col p-2 bg-black">
          {genres.map((obj, index) => (
            <div
              key={index}
              className="cursor-pointer hover:text-cyan-400"
              onClick={() => {
                onChangeGen(obj);
              }}
            >
              {obj.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SelectType;
