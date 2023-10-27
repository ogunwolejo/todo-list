import { ITodo } from "../interface/i.app";

export const getRandomItems = (array: Array<any>, count: number): Array<any> => {
    const shuffledArray = array?.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count);
};

export const getRandomItemFotCategorizedTodo = (array: Array<ITodo>, count: number): Array<ITodo> => {
    const countCategorizedTodos:Array<ITodo> = array.filter((el:ITodo) => !!el.category || (el.category && el.category?.length > 0)) 
    const shuffledArray = countCategorizedTodos?.sort(() => Math.random() - 0.5);
    return shuffledArray.slice(0, count)
}