import React from "react";
import { GiHamburgerMenu as Burger } from "react-icons/gi";
import { AiOutlineClose as Close } from "react-icons/ai";
import { NavLinks } from "./SideBar";

const MobileLayout = () => {
  const [clickBurg, setClickBurg] = React.useState(false);

  return (
    <>
      <div className="absolute top-4 right-4 block md:hidden">
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
            onClick={() => {
              setClickBurg(true);
            }}
          />
        )}
      </div>
      <div
        className={`bg-gradient-to-tl from-white/10 to-[#483d8b] backdrop-blur-lg w-3/4 h-full z-10 md:hidden transition-all ease duration-700 flex flex-col justify-center items-center absolute top-0 ${
          clickBurg ? "left-0" : "-left-full"
        } px-5`}
      >
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
    </>
  );
};

export default MobileLayout;

// color="rgb(32, 211, 238)"
