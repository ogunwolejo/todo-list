import { FC, Fragment, useEffect, useState } from "react";
import Header from "../common/header/header";
import Card1 from "../common/cards/card1";
import SaveButton from "../common/button/save.button";
import CategoryCard from "../component/categor.card";
import { Modal } from "../common/modal/modal";
import { AddModal } from "../common/modal/add.modal";
import { useSelector } from "react-redux";
import AddDataForm from "../component/add.data";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import {addCategories} from "../store/slice"
import { ICategory } from "../interface/i.app";
import { IFormData } from "../interface/i.formdata";
import moment from "moment";
import { DISPATCH_TYPES } from "../util/constant";
import {v4} from "uuid"

const defaultIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#000" className="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>

const Categories:FC = () => {
    const {todos, category} = useSelector((store:any) => ({
        todos: store.app.todos,
        category:store.app.category
    }))

    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()
    const [loading, setLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")
    const [copyCategory, setCopyCategory] = useState<Array<ICategory>>([])
    
    // adding a new category
    const [addNewCategory, setAddNewCategory] = useState<boolean>(false)
    const [addNewData, setAddNewData] = useState<boolean>(false)

    useEffect(() => {
        if(search.length > 2) {
            const filterCategories = category.filter((c:ICategory) =>  c.title.toLowerCase().includes(search.toLowerCase()))
            setCopyCategory(filterCategories)
        } else {
            setCopyCategory(category)
        }
    }, [category, search])
    
    const a:Array<number> = [1,2,3,4,5,6,7,8,9,10,11,12,]
    
    // adding data to the todo state
    const openHandler = () => {
        setAddNewData(true)
    }

    const addCategoryHandler = (e:IFormData) => {
        const cat:ICategory = {
            title:e.title,
            id:e.id,
            createdAt:moment()
        }
        dispatch(addCategories({type:DISPATCH_TYPES.CATEGORY, payload:cat}))
    }

    const cancelAddingCategoriesHandler = (e:any) => {
        console.log("cancel adding ---> ", e)
    }

    return (
        <Fragment>
            <Header title="Todos Categry" handler={setSearch} search={search}/>
            <div className="p-6 bg-gray-200 h-screen">
                <div className="grid grid-cols-3 grid-flow-col gap-2 lg:gap-4">
                    <div className="">
                        <Card1 title="All Todos" data={todos.length || 0} bgColor="bg-white" color="text-[#898989]"/>
                    </div>
                    <div className="">
                        <Card1 title="Categories Count" data={category.length || 0} bgColor="bg-white" color="text-[#898989]"/>
                    </div>
                    <div className="">
                        <Card1 title="Todos Saved Locally" data={344} bgColor="bg-white" color="text-[#898989]"/>
                    </div>                
                </div>

                <div className="p-1 mt-3 h-auto ">
                    {/** a save button and a filter based on the category */}
                    <div className="flex flex-col items-end">
                        <div className="flex flex-row items-center justify-start">
                            <SaveButton handler={() => null}/> 
                        </div>
                    </div>
                    
                    {/*** the todos based on their category */}
                    <div className="my-1 w-full p-2 box-border flex flex-col justify-start items-center">
                        <div className="text-center text-xs md:text-sm lg:text-xl font-bold uppercase text-black tracking-wider mb-1">Category List</div>
                        <p className="text-xs md:text-sm mb-6 font-light font-italics capitalize">can only create a maximun of twelve categories</p>
                        {!loading && <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 lg:gap-3" >
                            {
                                copyCategory.map((e:ICategory, idx:number) => (
                                    <CategoryCard
                                        key={idx} 
                                        title={e.title}
                                        data={7} 
                                        createdAt={moment(e.createdAt).format("LT")} 
                                        icon={defaultIcon}
                                    />
                                ))
                            }
                        </div>}

                        {addNewData && <AddDataForm handler={addCategoryHandler} resetHandler={(e:any) => cancelAddingCategoriesHandler(e)} key={v4()}/>}                       
                    
                        <div className="flex flex-row justify-end items-center px-3 mt-2 mr-5 w-full">
                            <button onClick={openHandler}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className=" w-6 h-6 md:w-8 md:h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>

            <Modal close={() => setAddNewCategory(false)} open={addNewCategory}/>
            
        </Fragment>
    )
}


export default Categories