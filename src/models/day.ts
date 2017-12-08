import { ISession } from './session';

export interface IDay{
    date: string
    sessions: Array<ISession>
}