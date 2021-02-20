import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore'
import { Observable } from 'rxjs'
import { Productor } from 'src/app/models/productor';

@Injectable({
  providedIn: 'root'
})
export class ProductorServiceService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  public addProductor(productor: Productor): void {
    this.firestore.collection("productors").add(productor.toObject());
  }

  //Récupere la liste des producteurs
  public getProductors(): Observable<Object> {
    return this.firestore.collection("productors").valueChanges();
  }

  //Récupere un producteur. id du prdocuteur en paramétre
  public getProductor(id: string): Observable<Object> {
    return this.firestore.collection("productors").doc(id).valueChanges();
  }
  
  public deleteProductor(id: string): void {
    this.firestore.collection("productors").doc(id).delete();
  }
}
