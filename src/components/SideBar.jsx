import React from "react";
import { Link } from "react-router-dom";
import { links } from "../assets/constants";
import MobileLayout from "./MobileLayout";

export const NavLinks = () => {
  const [isActive, setIsActive] = React.useState(0);

  return (
    <div className="h-4/5 w-full flex flex-col">
      {links.map((obj, index) => (
        <Link
          key={index}
          to={obj.to}
          className="flex flex-row justify-start items-center my-4 mx-4 text-sm font-medium text-gray-400 hover:text-cyan-400 cursor-pointer"
          onClick={() => {
            setIsActive(index);
          }}
        >
          <obj.icon
            className={`w-6 h-6 mr-2 ${isActive === index && "text-cyan-400"}`}
          />
          <p className={`${isActive === index && "text-cyan-400"}`}>
            {obj.name}
          </p>
        </Link>
      ))}
    </div>
  );
};

const SideBar = () => {
  const [isMobile, setIsMobile] = React.useState(false);
  // React.useEffect(() => {
  //   if (window.innerWidth < 900) {
  //     setIsMobile(true);
  //   } else {
  //     setIsMobile(false);
  //   }
  // }, [isMobile]);

  return (
    <>
      <div className="bg-black w-56 h-full hidden flex-col justify-center items-center sm:flex">
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
        <NavLinks />
      </div>
      <MobileLayout setIsMobile={setIsMobile} />
    </>
  );
};

export default SideBar;
