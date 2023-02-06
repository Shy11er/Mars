import React from "react";
import { Link } from "react-router-dom";
import { links } from "../assets/constants";

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

const MobileLayout = ({ setIsMobile }) => {
  const [clickBurg, setClickBurg] = React.useState(false);

  return (
    <div className="w-full h-6 flex absolute flex-row justify-end items-center p-8">
      {clickBurg ? (
        <Close
          size={"30px"}
          onClick={() => {
            setClickBurg(false);
          }}
        />
      ) : (
        <Burger
          size={"30px"}
          // className="transition-transform duration-1000 ease-in-out active:rotate-90 "
          onClick={() => {
            setClickBurg(true);
          }}
        />
      )}
      {clickBurg && (
        <div className="bg-black w-56 h-full flex flex-col justify-center items-center absolute top-0 left-0">
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
      )}
    </div>
  );
};

const SideBar = () => {
  const [isMobile, setIsMobile] = React.useState(true);

  return (
    <>
      {isMobile ? (
        <MobileLayout setIsMobile={setIsMobile} />
      ) : (
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
          <NavLinks />
        </div>
      )}
    </>
  );
};

export default SideBar;
