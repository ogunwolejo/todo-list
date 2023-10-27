import { FC, Fragment, useMemo } from "react";
import Header from "../common/header/header";
import Card1 from "../common/cards/card1";
import Card2 from "../common/cards/card2";
import { useNavigate } from "react-router-dom";

const Dashboard:FC = () => {
    const categoryFolder = useMemo(() => <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
  </svg>, [])

  const navigate = useNavigate()
  
    return (
        <Fragment>
            <Header title="Dashboard"/>
            <div className="p-10 bg-gray-200 h-screen relative">
                <div className="grid lg:grid-col-3 grid-col-4 grid-flow-col gap-4 lg:gap-6">
                    <div className="">
                        <Card1 title="Overall Todo List" data={344} bgColor="bg-red-700"/>
                    </div>
                    <div className="">
                        <Card1 title="Check Todos" data={344} bgColor="bg-blue-800" />
                    </div>
                    <div className="">
                        <Card1 title="Categories" data={344} bgColor="bg-green-700" />
                    </div> 
                    <div className="">
                        <Card1 title="Saved Todos" data={344} bgColor="bg-green-700" />
                    </div>                
                </div>

                <div className="p-1 mt-10 h-auto">
                    <div className="">
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
                            <div className="">
                                <Card2 cardTitle="Todos" list={[]} routerHandler={() => navigate("/my-todo")}/>
                            </div>

                            <div className="">
                                <Card2 cardTitle="Category" list={[]} routerHandler={() => navigate("/categories")} listIcon={categoryFolder}/>
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