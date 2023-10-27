import { FC, Fragment } from "react";
import { NavLink } from "react-router-dom";
import { ISidebarItems } from "../../../interface/i.sidebar";

const SideBarMenuItem:FC<{prop:ISidebarItems}> = ({prop}) => {
    return (
        <div className="text-center">
            <NavLink to={prop.to} className="text-xs md:text-sm xl:text-lg my-1  font-italics p-3">{prop.title}</NavLink>
        </div>
    )
}


export default SideBarMenuItem
