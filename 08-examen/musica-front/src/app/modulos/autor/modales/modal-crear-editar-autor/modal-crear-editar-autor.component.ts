import {Component, Inject, OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-modal-crear-editar-autor',
  templateUrl: './modal-crear-editar-autor.component.html',
  styleUrls: ['./modal-crear-editar-autor.component.scss']
})
export class ModalCrearEditarAutorComponent implements OnInit {
  nombre: string = "";
  apellido: string = "";
  fechaNacimiento: string = "";
  genero: string = "";
  nacionalidad: string = "";

  constructor(
    public dialogRef: MatDialogRef<ModalCrearEditarAutorComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any | boolean) {
  }

  ngOnInit() {

    if (!this.data) {
      console.log('Estamos creando');

    } else {
      console.log('estamos editando');
      console.log('datos en el modal', this.data);
      this.nombre = this.data.autor.nombre;
      this.apellido = this.data.autor.apellido;
      this.fechaNacimiento = this.data.autor.fechaNacimiento;
      this.genero = this.data.autor.genero;
      this.nacionalidad = this.data.autor.nacionalidad;
    }
  }

  cancelar() {
    this.dialogRef.close();
  }

  aceptar() {
    this.dialogRef.close({
      nombre: this.nombre,
      apellido: this.apellido,
      genero: this.genero,
      nacionalidad: this.nacionalidad,
      fechaNacimiento: this.fechaNacimiento,


    });

  }

}
