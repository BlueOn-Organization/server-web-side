import { Component, OnInit } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import {MatSnackBar} from '@angular/material';
import {FormControl, FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


export interface info {nombre,correo,celular}
@Component({
  selector: 'app-ite2',
  templateUrl: './ite2.component.html',
  styleUrls: ['./ite2.component.css']
})
export class Ite2Component implements OnInit {
  private respuestasCollection: AngularFirestoreCollection<any>;
  respuestas:info;
  disabled = false;
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  matcher = new MyErrorStateMatcher();


  constructor(
    private afs: AngularFirestore,
    public snackBar: MatSnackBar,
  ) { }

  ngOnInit() {
    this.respuestas = <info>{};
    this.respuestasCollection = this.afs.collection('Datos');
  }


  guardar(){
    if(this.respuestas.nombre != null && this.respuestas.correo != null && this.respuestas.celular != null){
      this.disabled = true;
      this.respuestasCollection
        .add(this.respuestas)
        .then(info =>{
          this.openSnackBar('Datos guardados');
        })
    }else{
      this.openSnackBar('Ingrese todos los datos');
    }

  }

  openSnackBar(mensaje: string) {
    this.snackBar.open(mensaje, '', {
      duration: 2500,
    });
  }
}
