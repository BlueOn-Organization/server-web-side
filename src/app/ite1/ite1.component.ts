import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {MatSnackBar} from '@angular/material';

export interface info {r1,r2,r3}

@Component({
  selector: 'app-ite1',
  templateUrl: './ite1.component.html',
  styleUrls: ['./ite1.component.css']
})
export class Ite1Component implements OnInit {

  private respuestasCollection: AngularFirestoreCollection<any>;
  respuestas:info;
  disabled = false;

  constructor(
    private afs: AngularFirestore,
    public snackBar: MatSnackBar,
  ) {

  }


  ngOnInit() {
    this.respuestas = <info>{};
    this.respuestasCollection = this.afs.collection('Respuestas');
  }

  guardar(){
    if(this.respuestas.r1 != null && this.respuestas.r2 != null && this.respuestas.r3 != null){
      this.disabled = true;
      this.respuestasCollection
        .add(this.respuestas)
        .then(info =>{
          this.openSnackBar('Respuestas guardadas');
        })
    }else{
      this.openSnackBar('Responda todas las preguntas');
    }

  }

  openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, '', {
      duration: 2500,
    });
  }

}
