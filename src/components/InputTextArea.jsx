import React from "react";

function InputTextArea(props) {
  return (
    <div className="relative z-0 w-3/4 mb-6 group">
      <div className="flex justify-between">
        <label htmlFor={props.name} className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">
          {props.label}
        </label>
        <p className="text-gray-500 absolute right-0">Sisa Karakter: 50</p>
      </div>
      <textarea
        id={props.name}
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={props.placeholder}
        value={props.value}
        onChange={props.onChange}
        required
      ></textarea>
    </div>
  );
}

export default InputTextArea;
