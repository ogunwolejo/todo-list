import { FC, Fragment, useState } from "react";
import Header from "../common/header/header";
import SaveButton from "../common/button/save.button";
import Card1 from "../common/cards/card1";
import List from "../component/list.items";
import TodoListComponent from "../component/todo.list";
import { AddModal } from "../common/modal/add.modal";

const defaultIcon = <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#000" className="w-4 h-4">
<path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
</svg>


const TodoList:FC = () => {
    const a:Array<number> = [1,2,3,4,5,6,7,8]

    // adding a new category
    const [addNewCategory, setAddNewCategory] = useState<boolean>(false)
    // opening the new category modal
    const openHandler = () => {
        setAddNewCategory(true)
    }
    
    return (
        <Fragment>
            <Header title="My Todo List"/>
            <div className="p-10 bg-gray-200 h-screen relative">
                <div className="grid grid-col-4 grid-flow-col gap-2">
                    <div className="">
                        <Card1 title="All Todos" data={344} bgColor="bg-white" color="text-[#898989]"/>
                    </div>
                    <div className="">
                        <Card1 title="Current Todos" data={344} bgColor="bg-white" color="text-[#898989]"/>
                    </div>
                    <div className="">
                        <Card1 title="Todos Saved Locally" data={344} bgColor="bg-white" color="text-[#898989]"/>
                    </div>                
                </div>

                <div className="p-1 mt-10 h-auto ">
                    {/** a save button and a filter based on the category */}
                    <div className="flex flex-col items-end">
                        <div className="flex flex-row items-center justify-start">
                            <SaveButton handler={() => null}/> 
                        </div>
                    </div>
                    
                    {/*** the todos based on their category */}
                    <div className="my-4 w-full p-2 box-border border border-2 flex flex-col justify-start items-center drop-shadown-lg border-white">
                        <div className="text-center text-xs md:text-sm lg:text-xl font-bold uppercase text-black tracking-wider mb-8">Todo List</div>
                        <div className="w-full md:w-3/5 mx-4 mb-8 p-1 application_list overflow-y-auto ">
                            {
                                a.map((e, idx:number) => (
                                    <TodoListComponent
                                        key={idx} 
                                        title="project01" 
                                        createdAt="10:54pm" 
                                        icon={defaultIcon}
                                    />
                                ))
                            }
                        </div>
                        
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
            <AddModal close={() => setAddNewCategory(false)} open={addNewCategory}/>
        </Fragment>
    )
}


export default TodoList