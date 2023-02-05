import React from "react";
import { Link } from "react-router-dom";
import { links } from "../assets/constants";

const NavLinks = ({ isActive, setIsActive }) => (
  <div className="h-4/5 w-full flex flex-col">
    {links.map((obj, index) => (
      <Link
        to={obj.to}
        className="flex flex-row justify-start items-center my-4 mx-4 text-sm font-medium text-gray-400 hover:text-cyan-400 cursor-pointer"
        onClick={() => {
          setIsActive(index);
        }}
      >
        <obj.icon
          className={`w-6 h-6 mr-2 ${isActive === index && "text-cyan-400"}`}
        />
        <p className={`${isActive === index && "text-cyan-400"}`}>{obj.name}</p>
      </Link>
    ))}
  </div>
);

const SideBar = () => {
  const [isActive, setIsActive] = React.useState(0);

  return (
    <div className="bg-black w-56 h-full flex flex-col justify-center items-center">
      <h1
        style={{
          fontFamily: "Mars",
          fontSize: "30px",
          color: "#fff",
          height: "40px",
          marginBottom: "40px",
        }}
      >
        MARS
      </h1>
      <NavLinks isActive={isActive} setIsActive={setIsActive} />
    </div>
  );
};

export default SideBar;
