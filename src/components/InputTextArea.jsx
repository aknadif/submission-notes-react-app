import React from "react";

function InputTextArea(props) {
  return (
    <div className="relative z-0 w-3/4 mb-6 group">
      <label htmlFor={props.name} className="block mb-2 text-md font-medium text-gray-400 dark:text-gray-400">
        {props.label}
      </label>

      <textarea
        id={props.name}
        rows="4"
        className="transition duration-700 block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:outline-0 focus:ring-1 focus:ring-sky-500 focus:border-sky-700 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-sky-500 dark:focus:border-sky-500 dark:focus:outline-0 dark:focus:ring-1"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      ></textarea>
    </div>
  );
}

export default InputTextArea;
