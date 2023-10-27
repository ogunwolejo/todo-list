import { FC, Fragment } from "react";

const Card1:FC<{title:string; bgColor:string; data:number; color?:string }> = ({title, bgColor, data, color="text-white"}) => {
    return (
        <Fragment>
            <div className={`h-32 md:h-40 w-full border-box drop-shadow-xl border border-transparent ${bgColor} rounded-lg flex flex-row items-center justify-center hover:cursor-pointer`}>
                <div className="flex flex-col items-center p-2">
                    <div className={`text-lg md:text-2xl font-extrabold self-center ${color}`}>{data}</div>
                    <label className={`text-xs md:text-md my-1 font-semibold font-poppins mx-3 w-full text-center ${color}`}>{title}</label>
                </div>
            </div>
        </Fragment>
    )
}

export default Card1