
import firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import { Productor } from './productor';

export class Announcements {

    public id:String
    public title:String
    public content:String
    public productorId:String
    public date:Timestamp

}
