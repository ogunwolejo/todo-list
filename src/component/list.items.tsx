import { Moment } from "moment";
import { FC, ReactNode } from "react"


const List:FC<{title:string; createdAt:string; icon:ReactNode}> = ({title, createdAt, icon}) => {
    return (
        <div className="border border-[#F1F1F1] rounded-lg flex flex-row px-3 py-1 justify-between items-center mt-1">
            <div className="flex flex-row justify-start items-center">
                <div className="p-2 flex flex-col justify-center items-center">
                    {icon}
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase mx-2">
                    {title}
                </div>
            </div>  
            <div className="text-xs md:text-sm text-gray-800">
                {createdAt}
            </div>            
        </div>
    )
}

export default List