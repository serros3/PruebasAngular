import { Component, OnInit } from '@angular/core';
import { Personaje} from '../../common/personaje';
import { PersonajesService } from '../../services/personajes.service';


@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrl: './personajes.component.css'
})
export class PersonajesComponent implements OnInit {

  personajes!: Personaje;
  constructor(private data: PersonajesService) { }
  
  ngOnInit(): void {
    this.cargarPersonajes();
  }

  private cargarPersonajes() {
    this.data.getPersonajes().subscribe({
      next: (datos: Personaje) => {
        this.personajes = datos;
      },
      error:(err:string)=>{
        console.log(err);
      },
      complete:()=>{
        console.log("Complete")
      }
    
    });
  }
}
