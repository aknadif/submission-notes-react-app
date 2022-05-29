import React from "react";
import ArchieveButton from "./ArchieveButton";
import DeleteButton from "./DeleteButton";
function Card({ title, body, createdAt, id, onDelete }) {
  const dayjs = require("dayjs");
  return (
    <div className="block p-6 max-w-sm rounded-lg border shadow-md bg-gray-800 border-gray-700 hover:bg-gray-700 m-4 relative transition duration-300 ease-in-out">
      <ArchieveButton />
      <DeleteButton id={id} onDelete={onDelete} />
      <h5 className="text-2xl font-bold tracking-tight text-white">{title}</h5>
      <p className="mb-2 text-sm text-gray-500">{dayjs(createdAt).format("MMMM DD, YYYY")}</p>
      <p className="font-normal text-gray-400 pb-12">{body}</p>
    </div>
  );
}

export default Card;
