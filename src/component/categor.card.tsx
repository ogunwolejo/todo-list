import { FC, Fragment, ReactNode, useState } from "react";
import {Modal} from "../common/modal/modal";
import { Moment } from "moment";
import { ICardData } from "../interface/i.cardcategory";



const CategoryCard:FC<{title:string;  createdAt:Moment; icon:ReactNode; description?:string }> = ({title,  createdAt, icon, description}) => {
    const [openModal, setIsOpenModal] = useState<boolean>(false)
    const openModalHandler = () => {
        setIsOpenModal(true)
    }
    const cardData:ICardData = {
        title: title,
        createdAt,
        description:!description ? "" : description
    }
    return (
        <Fragment>
            <div className={`h-20 md:h-28 md:w-48 w-full border-box drop-shadow-xl border border-transparent bg-white rounded-lg flex flex-row items-center justify-center hover:cursor-pointer`} onClick={openModalHandler}>
                <div className="flex flex-col items-center p-2">
                    <label className={`text-xs md:text-sm my-1 font-semibold font-poppins mx-3 w-full text-center text-[#898989]`}>{title}</label>
                </div>
            </div>
            <Modal open={openModal} close={() => setIsOpenModal(false)} d={cardData}/>
        </Fragment>
    )
}

export default CategoryCard