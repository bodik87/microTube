import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "/search.svg";
// import ClearIcon from "/clear.svg";
import YouTube from "/youtube.svg";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const onhandleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);

      setSearchTerm("");
    }
  };

  return (
    <form onSubmit={onhandleSubmit} className="flex items-center gap-2">
      <Link to="/">
        <img width={40} src={YouTube} alt="Home" />
      </Link>

      <div className="relative">
        <input
          className="bg-white outline outline-[2px] outline-transparent text-[#070035] text-sm pl-4 pr-10 py-1 rounded-xl transition-all placeholder:text-xs placeholder:text-gray-400 focus:outline focus:outline-red-600/70"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">
          <img
            className="absolute top-1 right-2"
            width={20}
            src={SearchIcon}
            alt="search"
          />
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
