import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Termek } from '../../shared/models/Termek';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireStorage } from '@angular/fire/compat/storage';

@Injectable({
  providedIn: 'root'
})
export class WebshopService {
  collectionName = 'Termekek';

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) { }

  loadProductMeta(metaUrl: string): Observable<Array<Termek>> {
    return this.afs.collection<Termek>(this.collectionName).valueChanges();
  }

  loadProduct(productUrl: string) {    
    return this.storage.ref(productUrl).getDownloadURL();
  }

}
