import { Moment } from "moment";

export interface IApp {
    todos:Array<ITodo>;
    category:Array<ICategory>;
    categorizedTodo:number
}


export interface ITodo {
    id:string;
    title:string;
    description:string;
    createdAt:Moment;
    category?:string | null
}


export interface ICategory {
    id:string;
    title:string;
    createdAt:Moment
}

export type TodoActionPayload = {
    payload: ITodo;
    type:string
}

export type CategoryActionPayload = {
    payload: ICategory;
    type:string
}
