import moment, { Moment } from "moment";

export interface IFormData {
    id:string;
    title:string;
    description: string;
    createdAt:null | Moment;
    category?:string | null
}