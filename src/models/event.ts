import { IDay } from './day';


export interface IEvent{
    start_date?: string
    end_date?: string
    days?: Array<IDay>
}