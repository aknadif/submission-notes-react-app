import React from "react";
import ArchieveButton from "./ArchieveButton";
import DeleteButton from "./DeleteButton";
function Card({ title, body, createdAt, id, onDelete, onArchive }) {
  const dayjs = require("dayjs");
  return (
    <div className="block p-6 max-w-sm rounded-lg border shadow-md bg-sky-200 dark:bg-gray-800 dark:border-gray-700 hover:bg-sky-300 dark:hover:bg-gray-700 m-4 relative transition duration-700 ease-in-out">
      <ArchieveButton id={id} onArchive={onArchive} />
      <DeleteButton id={id} onDelete={onDelete} />
      <h5 className="text-2xl font-bold tracking-tight text-sky-800 dark:text-white">{title}</h5>
      <p className="mb-2 text-sm text-sky-600 dark:text-gray-500">{dayjs(createdAt).format("MMMM DD, YYYY")}</p>
      <p className="font-normal text-sky-700 dark:text-gray-400 pb-12">{body}</p>
    </div>
  );
}

export default Card;
