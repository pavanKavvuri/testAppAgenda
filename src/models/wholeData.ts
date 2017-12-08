import { IVisitor } from './visitor';
import { IDriver } from './driver';
import { IContact } from './contact';
import { IHelp } from './help';
import { IEvent } from './event';
//import { ISession } from './/session';
//import { IDay } from './day'; 
//import { IEmergency_Contact } from './emergency_contact';


export interface IData{
    visitor: IVisitor
    transport_details: Array<IDriver>
    emergency_contacts: Array<IContact>
    contacts: Array<IContact>
    events: IEvent
    help_content: IHelp
}