import { Component, OnInit } from '@angular/core';
import { Pelicula } from 'src/app/models/Pelicula';
import { PeliculaService } from 'src/app/service/peliculas.service';

@Component({
  selector: 'app-peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit {

  public peliculas:Pelicula[]=[];
  p:number = 1;
  count:number = 25;
  //maxCount:number;
  dataLoaded = false;
  //pId:number;
  //apiNum:number;

  constructor(private peliculaService:PeliculaService) {}
  ngOnInit(): void {
    this.getLista();

  
  }

  getLista():void{
    this.peliculaService
    .lista()
    .subscribe(
      data =>{
      this.peliculas=data;
    })

    this.dataLoaded= true
    console.log('hola');
console.log("el array con datos del servicio es ", this.peliculas);
  }
}
