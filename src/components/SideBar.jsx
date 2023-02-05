import React from "react";
import { Link } from "react-router-dom";
import { links } from "../assets/constants";
import {
  HiOutlineHashtag,
  HiOutlineHome,
  HiOutlinePhotograph,
  HiOutlineUserGroup,
} from "react-icons/hi";
import { IconContext } from "react-icons";

const SideBar = () => {
  const [isActive, setIsActive] = React.useState(0);

  const onCl = (ind) => {
    setIsActive(ind);
  };
  return (
    <div className="bg-black w-56 h-full flex flex-col justify-center items-center">
      <h1
        style={{
          fontFamily: "Mars",
          fontSize: "30px",
          color: "#fff",
          height: "40px",
        }}
      >
        MARS
      </h1>
      <div className="h-4/5 w-full flex flex-col mt-[50px]">
        {links.map((obj, index) => {
          return (
            <div key={index} className="flex flex-row w-full h-[40px] p-5">
              <Link
                to={obj.to}
                className="flex flex-row"
                onClick={() => {
                  setIsActive(index);
                }}
              >
                <IconContext.Provider
                  value={{
                    color: `${isActive === index ? "rgb(34 211 238)" : "#fff"}`,
                    size: "30px",
                  }}
                >
                  <obj.icon className="hover:text-cyan-400" />
                </IconContext.Provider>
                <h1
                  className={`text-2xl ml-[10px] cursor-pointer hover:text-cyan-400 ${
                    isActive === index ? "text-cyan-400" : "text-white"
                  }`}
                >
                  {obj.name}
                </h1>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default SideBar;
