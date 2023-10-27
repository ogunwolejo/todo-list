import moment from "moment";
import { FC, MouseEventHandler, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IFormData } from "../interface/i.formdata";
import { ICategory } from "../interface/i.app";

const AddDataForm:FC<{handler:Function; resetHandler:any}> = ({handler, resetHandler}) => {
    const [dataForm, setDataForm] = useState<IFormData>({
        id:uuidv4(),
        description:"",
        title:"",
        createdAt:null,
    })


    
    return (
        <div className="md:w-3/6 mt-3 p-6 bg-white border rounded shadow-md">
            <h2 className="text-sx mb-2">Add Data</h2>
            <div>
                <div className="mb-2">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-xs uppercase">
                        Title
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="border rounded w-full py-2 px-3 text-xs placeholder:text-sm"
                        placeholder="Todo title"
                        value={dataForm.title}
                        onChange={(e:any) => setDataForm((cur) => ({...cur, title:e.target.value}))}
                    />
                </div>
                <div className="mb-2">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2 text-xs uppercase">
                        description
                    </label>
                    <textarea
                        className="border rounded-md text-xs placeholder:text-sm w-full py-2 px-3 placeholder:text-sm"
                        placeholder="description...."
                        value={dataForm.description}
                        onChange={(e:any) => setDataForm((cur) => ({...cur, description:e.target.value}))}
                    />
                </div>

                {/** the submit and cancel */}
                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold  placeholder:text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => {
                            const data:IFormData = {
                                ...dataForm,
                                createdAt:moment()
                            }

                            return handler(data)
                        }}
                    >
                        Submit
                    </button>

                    <button
                        type="submit"
                        className="mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold  placeholder:text-sm py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddDataForm;


//moment().format("dddd, MMMM Do YYYY")
