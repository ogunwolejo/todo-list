import moment from "moment";
import { FC, MouseEventHandler, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { IFormData } from "../interface/i.formdata";
import { ICategory } from "../interface/i.app";

const AddDataForm:FC<{handler:Function; resetHandler:any; isTodoForm?:boolean; categoriresData?:ICategory[]}> = ({handler, resetHandler, isTodoForm = false, categoriresData}) => {
    const [dataForm, setDataForm] = useState<IFormData>({
        id:uuidv4(),
        description:"",
        title:"",
        createdAt:null,
        category:null
    })

    const [error, setError] = useState<{
        error:boolean;
        message:string
    }>({
        error:false,
        message:""
    })

    useEffect(() => {
        if(dataForm.title.trim().length > 0) {
            setError({
                error:false,
                message:""
            })
        } 
    }, [dataForm.title])


    
    return (
        <div className="md:w-3/6 mt-3 p-6 bg-white border rounded shadow-md">
            <h2 className="text-sx mb-2">Add Data</h2>
            <div>
                <div className="mb-2">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-xs uppercase required">
                        Title
                    </label>
                    <input
                        type="text"
                        id="name"
                        required
                        className={`border ${error.error ? "border-4 border-red-500" : ""} rounded w-full py-2 px-3 text-xs placeholder:text-sm`}
                        placeholder="Title...."
                        value={dataForm.title}
                        onChange={(e:any) => setDataForm((cur) => ({...cur, title:e.target.value}))}
                    />
                    {error.error && <p className="text-sm text-red-600">{error.message}</p>}
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

                {isTodoForm && <div className="mb-2">
                    <label htmlFor="description" className="block text-gray-700 font-bold mb-2 text-xs uppercase">
                        category
                    </label>
                    {(categoriresData && categoriresData.length > 0) ? <select  onChange={(e:any) => setDataForm((c) => ({...c, category:e.target.value}))} className="border rounded-md text-xs placeholder:text-sm w-full py-2 px-3 placeholder:text-sm" placeholder="select a category...">
                            <option className="text-sm" value="">Select category</option>
                        {
                            categoriresData?.map((e) => (
                                <option key={e.id} value={e.id} className="text-sm">{e.title}</option>
                            ))
                        }
                    </select> : (
                        <p className="text-xs text-black">Can you add category in the categories section</p>
                    )}
                </div>}

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

                            if(data.title.trim().length === 0) {
                                return setError({
                                    error:true,
                                    message:"required"
                                })
                            }

                            handler(data)
                            resetHandler() // for closing the form

                        }}
                    >
                        Submit
                    </button>

                    <button
                        onClick={resetHandler}
                        type="button"
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
