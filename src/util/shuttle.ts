import { ITodo } from "../interface/i.app";

export const getRandomItems = (array: Array<any>, count: number): Array<any> => {
    return array.slice(0, count);
};

export const getRandomItemFotCategorizedTodo = (array: Array<any>, count: number): Array<any> => {
    const countCategorizedTodos:Array<any> = array.filter((el:any) => !el.category || (el.category && el.category?.length > 0))
    return countCategorizedTodos.slice(0, count)
}