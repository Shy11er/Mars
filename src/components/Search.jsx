import React from "react";
import { BiSearch } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";

const Search = () => {
  const [value, setValue] = React.useState("");

  const onSearch = () => {};

  return (
    <div className="relative w-64 h-8">
      <BiSearch
        size={26}
        className="absolute top-2 left-2 cursor-pointer"
        onClick={() => {
          onSearch(value);
        }}
      />
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(ev) => {
          setValue(ev.target.value);
        }}
        className="rounded-2xl outline-none border-none text-white px-10 bg-inherit placeholder:text-white focus:outline-none"
      />
      {value && (
        <AiOutlineClose
          size={18}
          className="absolute top-3 right-2 cursor-pointer"
          onClick={() => {
            setValue("");
          }}
        />
      )}
    </div>
  );
};

export default Search;
