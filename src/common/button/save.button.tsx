import { FC, MouseEventHandler } from "react";

const SaveButton:FC<{handler:MouseEventHandler<HTMLButtonElement>}> = ({handler}) => {
    return (
        <button className="box-border font-semibold w-20 md:w-36 drop-shadow-sm rounded-md h-6 md:h-12 bg-blue-700 text-white upper text-xs md:text-lg hover:bg-white hover:text-blue-700 hover:border-2 hover:border-blue-700" onClick={handler}>
            Save
        </button>
    )
}

export default SaveButton