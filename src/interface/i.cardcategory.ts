import { Moment } from "moment";

export interface ICardData {
    title:string;
    data:number;
    createdAt:Moment;
    description:string;
}