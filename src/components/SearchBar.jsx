import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "/search.svg";

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
    <form
      onSubmit={onhandleSubmit}
      className="flex justify-center items-center gap-4 py-1"
    >
      <Link
        className="flex items-center font-medium text-[#FF0000] text-xl"
        to="/"
      >
        micro<span className="text-white">Tube</span>
      </Link>

      <div className="relative">
        <input
          className="bg-white/10 outline outline-[2px] outline-gray-400 text-white text-sm pl-4 pr-10 py-1 rounded-lg transition-all placeholder:text-xs placeholder:text-gray-400 focus:outline focus:outline-[#FF0000] focus:bg-transparent"
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
