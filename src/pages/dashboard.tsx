import { FC, Fragment, useState, useEffect, useMemo } from "react";
import Header from "../common/header/header";
import Card1 from "../common/cards/card1";
import Card2 from "../common/cards/card2";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ITodo } from "../interface/i.app";
import { getRandomItems } from "../util/shuttle";
import Dropdown from "../common/mobile.nav";

const Dashboard:FC = () => {
    const categoryFolder = useMemo(() => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>, [])

    const {todos, category} = useSelector((store:any) => ({
        todos: store.app.todos,
        category:store.app.category
    }))

    const [shuttles, setShuttles] = useState<{
        todos:Array<any>;
        category:Array<any>;
    }>({
        todos:[],
        category:[]
    })

    useEffect(() => {
        const todoShuttle = getRandomItems(todos, 5)
        const categoryShuttle = getRandomItems(category, 5)
        setShuttles({
            category:categoryShuttle,
            todos:todoShuttle
        })
    }, [todos, category])

    const navigate = useNavigate()
    
    return (
        <Fragment>
            <div className="bg-white h-10 md:h-20 min-w-fit xl:max-w-8xl box-border md:text-lg lg:text-2xl flex flex-row justify-between xl:justify-between items-center drop-shadow-sm">
                <div className="text-xs md:text-lg font-emibold ms-2">Dashboard</div>
                {/* <div className="mr-2">
                    <SearchInput handler={handler} search={search}/>
                </div> */}
                <div className="mr-3">
                    <Dropdown/>
                </div>
            </div>
            <div className="p-6 bg-gray-200 screen ">
                <div className="grid grid-cols-2 md:grid-cols-4 grid-cols-4 md:grid-flow-col gap-2 lg:gap-3">
                    <div className="">
                        <Card1 title="Overall Todo List" data={todos.length || 0} bgColor="bg-red-700"/>
                    </div>
                    <div className="">
                        <Card1 title="Check Todos" data={344} bgColor="bg-blue-800" />
                    </div>
                    <div className="">
                        <Card1 title="Categories" data={category.length || 0} bgColor="bg-green-700" />
                    </div> 
                    <div className="">
                        <Card1 title="Saved Todos" data={344} bgColor="bg-green-700" />
                    </div>                
                </div>

                <div className="p-1 mt-10 h-auto">
                    <div className="">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                            <div className="">
                                <Card2 cardTitle="Todos" list={shuttles.todos} routerHandler={() => navigate("/my-todo")}/>
                            </div>

                            <div className="">
                                <Card2 cardTitle="Category" list={shuttles.category} routerHandler={() => navigate("/categories")} listIcon={categoryFolder}/>
                            </div>

                            <div className="">
                                <Card2 cardTitle="Checked Todos" list={[]} routerHandler={() => null}/>
                            </div>

                        </div>
                        
                    </div>
                </div>

                {/** saving todos */}
                <div className="my-4">

                </div>
            </div>
        </Fragment>
    )
}

export default Dashboard