import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RespuestaLista } from "../models/RespuestaLista";
import { Pelicula } from "../models/Pelicula";

@Injectable({
    providedIn:'root'
})
export class PeliculaService{
    public url1:string = "https://api.jikan.moe/v4/anime";


    constructor(private httpClient: HttpClient){}


    public lista():Observable<Pelicula[]>{
        return this.httpClient.get<Pelicula[]>(this.url1);
    }
}