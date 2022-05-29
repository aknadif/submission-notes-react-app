import React from "react";
import { TrashIcon } from "@heroicons/react/outline";

function DeleteButton({ id, onDelete }) {
  return (
    <React.Fragment>
      <button
        className="absolute left-0 bottom-0 p-4 bg-red-400 rounded-tr-3xl rounded-bl-sm transition-all hover:p-8 hover:rounded-tr-full cursor-pointer w-12 h-12 group"
        onClick={() => {
          onDelete(id);
        }}
      >
        <TrashIcon className="w-7 h-7 text-gray-900 -ml-3 group-hover:-ml-7" />
      </button>
    </React.Fragment>
  );
}

export default DeleteButton;
