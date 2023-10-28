import { FC, Fragment, useEffect, useState } from "react";
import Header from "../common/header/header";
import SaveButton from "../common/button/save.button";
import Card1 from "../common/cards/card1";
import List from "../component/list.items";
import TodoListComponent from "../component/todo.list";
import { Modal } from "../common/modal/modal";
import AddDataForm from "../component/add.data";
import { useSelector } from "react-redux";
import { ICategory, ITodo } from "../interface/i.app";
import { v4 } from "uuid";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "@reduxjs/toolkit";
import { addTodos, saveTodosLocally } from "../store/slice";
import { DISPATCH_TYPES } from "../util/constant";
import moment from "moment";

const defaultIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#000" className="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>


const TodoList:FC = () => {
    const {todos, categories, savedData} = useSelector((store:any) => ({
        todos: store.app.todos, 
        categories:store.app.category,
        savedData:store.app.savedData
    }))
    const dispatch = useDispatch<ThunkDispatch<any, any, any>>()

    // copy todos
    const [copyTodos, setCopyTodos] = useState<Array<ITodo>>([])
    const [loading, setLoading] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")


    useEffect(() => {
        if(search.length > 0) {
            const todoFilter = todos.filter((t:ITodo) =>  t.title.toLowerCase().includes(search.toLowerCase()))
            setCopyTodos(todoFilter)
        } else {
            setCopyTodos(todos)
        }
    }, [todos, search])

    // adding a new category
    const [addNewCategory, setAddNewCategory] = useState<boolean>(false)
    const [addNewData, setAddNewData] = useState<boolean>(false)
    
    // adding data to the todo state
    const openHandler = () => {
        setAddNewData(true)
    }

    // adding a new category to the category state
    const addTodoHandler = (e:ITodo) => {
        const t:ITodo = {
            title:e.title,
            id:e.id,
            createdAt:e.createdAt,
            description:e.description,
            category:e.category
        }
        dispatch(addTodos({type:DISPATCH_TYPES.TODO, payload:t}))
    }

    const close = () => {
        setAddNewData(false)
    }

    
    return (
        <Fragment>
            <Header title="My Todo List" handler={setSearch} search={search}/>
            <div className="p-6 bg-gray-200 h-screen">
                <div className="grid grid-cols-3 grid-flow-col gap-2 lg:gap-4">
                    <div className="">
                        <Card1 title="All Todos" data={todos.length || 0} bgColor="bg-white" color="text-[#898989]"/>
                    </div>
                    <div className="">
                        <Card1 title="Current Todos" data={copyTodos.length || 0} bgColor="bg-white" color="text-[#898989]"/>
                    </div>
                    <div className="">
                        <Card1 title="Saved Data Locally" data={savedData} bgColor="bg-white" color="text-[#898989]"/>
                    </div>                
                </div>

                <div className="p-1 mt-10 h-auto ">
                    {/** a save button and a filter based on the category */}
                    <div className="flex flex-col items-end">
                        <div className="flex flex-row items-center justify-start">
                            <SaveButton handler={() => dispatch(saveTodosLocally())}/> 
                        </div>
                    </div>
                    
                    {/*** the todos based on their category */}
                    <div className="my-4 w-full p-2 box-border border border-2 flex flex-col justify-start items-center drop-shadown-lg border-white">
                        <div className="text-center text-xs md:text-sm lg:text-xl font-bold uppercase text-black tracking-wider mb-8">Todo List</div>
                        <div className="w-full md:w-3/5 mx-4 mb-8 p-1 application_list overflow-y-auto ">
                            { todos.length > 0 ?
                                copyTodos.map((e, idx:number) => (
                                    <TodoListComponent
                                        key={e.id} 
                                        title={e.title} 
                                        createdAt={moment(e.createdAt).format("LT")} 
                                        icon={defaultIcon}
                                    />
                                ))
                                :
                                (<div className="text-center text-xs md:text-sm lg:text-md text-black font-semibold font-italics">Your Todo List is empty</div>)
                            }
                        </div>

                        {addNewData && <AddDataForm handler={(e:any) => addTodoHandler(e)} resetHandler={close} key={v4()} isTodoForm={true} categoriresData={categories}/>}
                        
                        <div className="flex flex-row justify-end items-center mt-5 py-3 mr-5 w-full">
                            <button onClick={openHandler}>
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" className="w-8 h-8">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>
                                </div>
                            </button>
                        </div>
                    </div>
                    
                </div>
            </div>
            {/*<Modal close={() => setAddNewCategory(false)} open={addNewCategory}/>*/}
            

        </Fragment>
    )
}


export default TodoList