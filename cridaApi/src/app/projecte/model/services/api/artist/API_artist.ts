import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class API_artist{
    
    constructor(private http:HttpClient){}

    getArtists():Observable<any>{
        const requestOptions = this.createHeader();
        return this.http.get('https://api.artic.edu/api/v1/artists', requestOptions);
    }
    getArtist(id:number):Observable<any>{
        const requestOptions = this.createHeader();
        return this.http.get('https://api.artic.edu/api/v1/artists/'+id, requestOptions);
    }

    private createHeader(){

        const header = {
            'Access-Control-Allow-Origin':'*',
            'Content-Type':'application/json',
            'Accept':'application/json',
            'Acces-Control-Allow-Headers':'Origin, Content-Type, Accept,Authorization',
        }
        return {headers: new HttpHeaders(header)};
    }
}