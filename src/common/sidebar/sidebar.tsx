import React from "react";

const Sidebar = () => {
  return (
    <div className="h-full w-18 md:w-32 lg:w-64 bg-gray-100 fixed left-0 top-0 drop-shadow-lg">
      <ul className="flex flex-col justify-between">
        <li className="p-2">
          <a href="/" className="text-gray-800">Home</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
