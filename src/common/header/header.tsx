import { FC, useMemo, memo } from "react";
import Dropdown from "../mobile.nav";

const Header:FC<{title:string; handler:Function; search:string}> = ({title, search, handler}) => {
    return (
        <div className="bg-white h-10 md:h-20 min-w-fit xl:max-w-8xl box-border text-xs md:text-sm lg:text-xl flex flex-row justify-equal md:justify-between xl:justify-between items-center drop-shadow-sm">
            <div className="text-xs md:text-lg font-emibold ms-2">{title}</div>
            <div className="mr-2">
                <SearchInput handler={handler} search={search}/>
            </div>
            <div className="mr-3">
                <Dropdown/>
            </div>
        </div>
    )
}

export default Header


// takes in the handler and text
export const SearchInput:FC<{handler:Function; search:string}> = memo(({handler, search}) => {
    return (
        <div className="flex items-center border justify-self-center self-center rounded-xl py-1 mx-6 bg-trans">
            <span className="mx-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1" stroke="#c6c6c6" className="w-4 h-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </span>
            <input
                onChange={(e:any) => handler(e.target.value)}
                value={search}
                type="text"
                className="outline-none placeholder-light text-sm text-grey md:py-1 px-3 bg-transparent"
                placeholder="Search anything..."
            />
        </div>
    )
})


