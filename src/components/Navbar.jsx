import React from "react";
import { SearchIcon } from "@heroicons/react/solid";
function Navbar(props) {
  return (
    <nav className="bg-gray-900 p-4 border-b-2 border-gray-600">
      <div className="container flex flex-col md:flex-row justify-between items-center ">
        <a href="/" className="text-gray-200 font-semibold text-xl ">
          Notes App
        </a>
        <form className="flex items-center py-4 md:py-0">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-full">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-400" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="border text-sm rounded-lg block w-full pl-10 p-2.5  bg-gray-700 border-gray-600 placeholder-gray-400 text-white focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search"
              onChange={props.onChange}
              value={props.value}
              required
            />
          </div>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
