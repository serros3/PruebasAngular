import { Component,OnInit } from '@angular/core';
import { Persona } from '../../common/persona';
import { Trabajador } from '../../common/trabajador';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrl: './principal.component.css'
})
export class PrincipalComponent implements OnInit {
  // Zona de declaración de las variables
  nombre: string = '';
  numero: number = 0;
  numeroFloat: number = 0.0;
  booleano: boolean = false;
  objeto: {color: string, peso: number} = {color: 'blanco', peso: 10.5};
  coleccion: string[] = ['Manzana', 'Pera', 'Naranja', 'Fresa'];



  miPersona: Persona = {
    nombre: 'Pepe',
    edad: 23,
    mayor: this.esMayor(23)// función que comprueba si es mayor
    //de edad, la hacemos en las funciones privadas
    };
  trabajadores: Trabajador[] = [];


  // El constructor del componente, en él inyectaremos los módulos necesarios
  constructor(){}

  // ngOnInit es la función que se ejecuta nada más cargar el componente
  ngOnInit(): void { this.rellenarTrabajadores();}
  
  //*******Ahora incluiriamos las funciones*******/
  // Funciones públicas invocadas desde fuera de la clase

  cambiarNombre(nombre:string){
    this.miPersona.nombre=nombre;
  }
  // Funciones privadas invocadas desde la propia clase
  private esMayor(edad: number) {
    return edad>18;
  }

  private rellenarTrabajadores() {
    this.trabajadores.push(
    {
    persona: {
    nombre: 'Ironman',
    edad: 37,
    mayor: this.esMayor(37)
    },
    profesion: 'Superheroe'
    },
    {
    persona: {
    nombre: 'Spiderman',
    edad: 17,
    mayor: this.esMayor(17)
    },
    profesion: 'Superheroe'
    },
    {
    persona: {
    nombre: 'Thanos',
    edad: 371,
    mayor: this.esMayor(371)
    },
    profesion: 'Villano'
    },
    )
  }



}
