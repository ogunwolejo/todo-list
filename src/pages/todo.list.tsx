import { FC, Fragment } from "react";
import Header from "../common/header/header";

const TodoList:FC = () => {
    return (
        <Fragment>
            <Header title="My Todo List"/>
            <div className="p-10 bg-gray-200 h-screen relative">
            </div>
        </Fragment>
    )
}


export default TodoList