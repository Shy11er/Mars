import React from "react";
import search from "../assets/search.svg";

const Search = () => {
  const [value, setValue] = React.useState("");

  return (
    <div className="relative w-36 h-8">
      <img src={search} alt="logo" className="absolute" />
      <input type="text" />
    </div>
  );
};

export default Search;
