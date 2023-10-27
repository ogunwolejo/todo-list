export interface IApp {
    todos:Array<ITodo>;
    category:Array<ICategory>
}


interface ITodo {
    id:string;
    title:string;
    description:string;
    createdAt:string;
}


interface ICategory {
    id:string;
    categoryTitle:string;
}