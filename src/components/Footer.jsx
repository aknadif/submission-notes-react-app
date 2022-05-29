import React from "react";

function Footer() {
  return (
    <footer className="bg-sky-200 dark:bg-gray-900 flex justify-center items-center h-20 text-lg border-t-2 border-sky-200 shadow-lg dark:border-gray-600">
      {" "}
      <p className="text-sky-800 dark:text-gray-200">
        Created with 💖 by
        <a href="https://github.com/aknadif" target="_blank" rel="noreferrer">
          {" "}
          AK Nadhif
        </a>
      </p>
    </footer>
  );
}

export default Footer;
