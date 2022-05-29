import React from "react";

function Button(props) {
  return (
    <button
      className="transition duration-700 relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:hover:text-white dark:text-white focus:ring-4 focus:outline-none  focus:ring-cyan-800"
      type="submit"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-sky-100 dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">{props.name}</span>
    </button>
  );
}

export default Button;
