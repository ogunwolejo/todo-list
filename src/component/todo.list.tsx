import { Moment } from "moment";
import { FC, ReactNode, useState } from "react"
import CopyToClipboardButton from "./clip.button";
import { v4 } from "uuid";
import swal from "sweetalert";


const TodoListComponent:FC<{title:string; createdAt:string; icon:ReactNode}> = ({title, createdAt, icon}) => {
    const [copy, setCopy] = useState<string>("")
    
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
                    <CopyToClipboardButton copy={copy} handler={() => {
                        navigator.clipboard.writeText(title)
                        .then(() => {
                            swal("Great!!", `Your Todo item of title ${title} as been copied`, "success");
                            console.log(navigator)
                            })
                            .catch(error => {
                                console.error('Error copying to clipboard:', error);
                            });
                        setCopy(title)
                        
                    }} key={v4()}/>
                <div className="text-xs md:text-sm text-black">
                    {createdAt}
                </div>     
            </div>           
        </div>
    )
}

export default TodoListComponent