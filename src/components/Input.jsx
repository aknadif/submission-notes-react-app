import React from "react";

function Input(props) {
  return (
    <div className="relative z-0 w-3/4 mb-6 group">
      <input
        type={props.type}
        name={props.name}
        className="block py-2.5 px-0 w-full text-md bg-transparent border-0 border-b-2 appearance-none text-white border-gray-600  focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        value={props.value}
        onChange={props.onChange}
        required
      />
      <label
        htmlFor={props.name}
        className="peer-focus:font-medium absolute text-md font-medium text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {props.placeholder}
      </label>
    </div>
  );
}

export default Input;
