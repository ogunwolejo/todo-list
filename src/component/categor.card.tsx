import { FC, Fragment, ReactNode } from "react";

const CategoryCard:FC<{title:string; data:number; createdAt:string; icon:ReactNode }> = ({title, data, createdAt, icon}) => {
    return (
        <Fragment>
            <div className={`h-20 md:h-28 w-full border-box drop-shadow-xl border border-transparent bg-white rounded-lg flex flex-row items-center justify-center hover:cursor-pointer`}>
                <div className="flex flex-col items-center p-2">
                    <div className={`text-lg md:text-2xl font-extrabold self-center text-black`}>{data}</div>
                    <label className={`text-xs md:text-sm my-1 font-semibold font-poppins mx-3 w-full text-center text-[#898989]`}>{title}</label>
                </div>
            </div>
        </Fragment>
    )
}

export default CategoryCard