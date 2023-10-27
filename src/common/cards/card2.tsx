import { FC, Fragment, MouseEventHandler, ReactNode } from "react";
import List from "../../component/list.items";
import moment from "moment";

const defaultIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#000" className="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

const Card2:FC<{cardTitle:string; list:Array<any>; routerHandler:MouseEventHandler<HTMLButtonElement>; listIcon?:ReactNode}> = ({cardTitle, list, routerHandler, listIcon = defaultIcon}) => {
    return (
        <Fragment>
            <div className="h-32 md:h-72 w-auto border-box drop-shadow-xl border border-transparent bg-white rounded-lg p-4 my-1 md:mx-1 hover:cursor-pointer">
                <div className="w-full mb-2">
                    <div className="flex flex-row justify-between items-center mb-1">
                        <h3 className="text-xs md:text-sm lg:text-md font-poppins font-semibold uppercase antialiased ">{cardTitle}</h3>
                    </div>
                </div>
                {/*** */}
                {
                    list.map((e:any, idx:number) => (
                        <div className="" key={idx}>
                            <List 
                                title={e.title} 
                                createdAt={moment(e.createdAt).format("LT")} 
                                icon={listIcon}
                            />
                        </div>
                    ))
                }
                {/** the view button */}
                <div className="my-3 flex flex-row justify-end items-center">
                    <button className="p-2 text-black rounded-lg text-sm flex flex-row justify-start items-center gap-1" onClick={routerHandler}>
                        <h6 className="uppercase font-semibold text-xs">view</h6>
                        <div>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </Fragment>
    )
}


export default Card2

