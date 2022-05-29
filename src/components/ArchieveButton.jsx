import React from "react";
import { ArchiveIcon } from "@heroicons/react/outline";

function ArchieveButton() {
  return (
    <React.Fragment>
      <button className="absolute bottom-0 right-0 p-4 bg-yellow-200 rounded-tl-3xl transition-all rounded-br-sm hover:p-8 hover:rounded-tl-full cursor-pointer w-12 h-12">
        <ArchiveIcon className="w-7 h-7 text-gray-900 " />
      </button>
    </React.Fragment>
  );
}

export default ArchieveButton;
