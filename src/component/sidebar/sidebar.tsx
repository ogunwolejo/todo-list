import React, { FC } from "react";
import SideBarMenu from "./sidebar-menu/sidebar.menu";

const Sidebar:FC = () => {
  return (
    <div className="h-auto w-12 sm:w-18 md:w-32 lg:w-48 xl:w-64 bg-white drop-shadow-md">
      <div className="flex flex-col justify-equally h-full">
        {/** sidebar header */}
        <div className="container my-6">
          <div className="header-container text-center">
            <h3 className="invisible md:visible md:text-md lg:text-lg font-medium font-italics p-6">My Todo App</h3>
          </div>
        </div>
        {/** sidebar menu */}
        <SideBarMenu/>
      </div>
    </div>
  );
};

export default Sidebar;
