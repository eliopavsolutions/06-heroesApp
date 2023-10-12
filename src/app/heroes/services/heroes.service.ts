import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from '../interfaces/hero.interface';
import { environment } from 'src/environments/environment';

@Injectable({providedIn: 'root'})
export class HeroesService {

    private baseUrl : string = 'http://localhost:3000'; //environment.baseUrl;
    
    

    constructor(private http: HttpClient) { 
        console.log("Entro",this.baseUrl); 
    }

    getHeroes():Observable<Hero[]>{

        return this.http.get<Hero[]>(`${ this.baseUrl }/heroes`);
    }
    
}