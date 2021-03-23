import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AnnouncementServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public getAnnouncements(): Observable<Object> {
    return this.firestore.collection('announcements').valueChanges();
  }

  public getAnnouncement(id: string): Observable<Object> {
    return this.firestore.collection('announcements').doc(id).valueChanges();
  }

  public getAnnouncementByProductor(id: string): Observable<Object> {
    return this.firestore.collection('announcements', ref => ref.where('productor', '==', id )).valueChanges();
  }

}
