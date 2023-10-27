import { Moment } from "moment";
import { FC, ReactNode } from "react"


const TodoListComponent:FC<{title:string; createdAt:string; icon:ReactNode}> = ({title, createdAt, icon}) => {
    return (
        <div className="border bg-[#898989] rounded-lg flex flex-row px-3 py-1 justify-between items-center w-full">
            <div className="flex flex-row justify-start items-center">
                <div className="p-2 flex flex-col justify-center items-center">
                    {icon}
                </div>
                <div className="text-xs md:text-sm font-semibold uppercase mx-2">
                    {title}
                </div>
            </div>  
            <div className="flex flex-row justify-center items-center gap-1">
                <button className="p-2 flex flex-col justify-center items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125" />
                    </svg>
                </button>
                <div className="text-xs md:text-sm text-black">
                    {createdAt}
                </div>     
            </div>           
        </div>
    )
}

export default TodoListComponent