import { FC, MouseEventHandler } from "react";

const SaveButton:FC<{handler:MouseEventHandler<HTMLButtonElement>}> = ({handler}) => {
    return (
        <button className="box-border font-semibold w-20 md:w-36 shadow-md rounded-md h-6 md:h-12 bg-[#898989] text-white upper text-xs md:text-lg hover:bg-white hover:text-[#898989] hover:border-2 hover:border-[#898989]" onClick={handler}>
            Save
        </button>
    )
}

export default SaveButton