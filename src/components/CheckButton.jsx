import React from "react";
import { CheckIcon } from "@heroicons/react/outline";

function CheckButton({ id, onOutArchive }) {
  return (
    <React.Fragment>
      <button
        className="absolute bottom-0 right-0 p-4 bg-green-400 rounded-tl-3xl transition-all rounded-br-sm hover:p-8 hover:rounded-tl-full cursor-pointer w-12 h-12"
        onClick={() => {
          onOutArchive(id);
        }}
      >
        <CheckIcon className="w-7 h-7 text-gray-900 " />
      </button>
    </React.Fragment>
  );
}

export default CheckButton;
