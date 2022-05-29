import React from "react";
import { SearchIcon, MoonIcon, SunIcon } from "@heroicons/react/solid";
import useDarkMode from "../hooks/useDarkMode";
function Navbar(props) {
  const [colorTheme, setTheme] = useDarkMode();
  return (
    <nav className="bg-sky-200 border-sky-100 dark:bg-gray-900 p-4 border-b-2 dark:border-gray-600 transition duration-700">
      <div className="flex flex-col md:flex-row justify-around items-center">
        <a href="/" className="text-sky-800 dark:text-gray-200 font-semibold text-xl -ml-16">
          Notes App
        </a>
        <form className="py-4 md:py-0">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative ">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
              <SearchIcon className="w-5 h-5 text-gray-800 dark:text-gray-400" />
            </div>
            <input
              type="text"
              id="simple-search"
              className="border text-sm rounded-lg block w-full pl-10 p-2.5 bg-sky-100 dark:bg-gray-700 dark:border-gray-600 placeholder:text-gray-800 dark:placeholder:text-gray-400 text-gray-800 dark:text-white focus:ring-sky-500 focus:ring-1 focus:border-sky-500 transition duration-700 focus:outline-none"
              placeholder="Search"
              onChange={props.onChange}
              value={props.value}
              required
            />
          </div>
        </form>
        <div
          className="w-10 h-10 bg-sky-400 dark:bg-gray-700 rounded-full shadow-lg cursor-pointer text-white flex items-center justify-center"
          onClick={() => {
            setTheme(colorTheme);
          }}
        >
          {colorTheme === "dark" ? <MoonIcon className="w-7 h-7 text-gray-100" /> : <SunIcon className="w-7 h-7 text-gray-100" />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
