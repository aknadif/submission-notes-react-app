import React from "react";
import { ArchiveIcon, TrashIcon } from "@heroicons/react/outline";
function Card({ title, body, createdAt }) {
  const dayjs = require("dayjs");
  return (
    <div className="block p-6 max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700 m-4 relative transition duration-300 ease-in-out">
      <span className="absolute left-0 bottom-0 p-4 bg-red-400 rounded-tr-3xl rounded-bl-sm transition-all hover:p-8 hover:rounded-tr-full cursor-pointer w-12 h-12 group">
        <TrashIcon className="w-7 h-7 text-gray-900 -ml-3 group-hover:-ml-7" />
      </span>
      <span className="absolute bottom-0 right-0 p-4 bg-yellow-200 rounded-tl-3xl transition-all rounded-br-sm hover:p-8 hover:rounded-tl-full cursor-pointer w-12 h-12">
        <ArchiveIcon className="w-7 h-7 text-gray-900 " />
      </span>
      <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
      <p className="mb-2 text-sm text-gray-500">{dayjs(createdAt).format("MMMM DD, YYYY")}</p>
      <p className="font-normal text-gray-400 pb-12">{body}</p>
    </div>
  );
}

export default Card;
