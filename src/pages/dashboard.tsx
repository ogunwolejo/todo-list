import { FC } from "react";
import Header from "../common/header/header";

const Dashboard:FC = () => {
    return (
        <>
            <Header title="Dashboard"/>
            <div className="p-10">
                <div className="flex-grow">Dashboard</div>
            </div>
        </>
    )
}

export default Dashboard