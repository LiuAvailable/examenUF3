import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class API_artwork{
    
    constructor(private http:HttpClient){}

    getArtworks():Observable<any>{
        const requestOptions = this.createHeader();
        return this.http.get('https://api.artic.edu/api/v1/artworks', requestOptions);
    }

    getImatge(id:string):Observable<any>{
        const requestOptions = this.createHeader();
        return this.http.get('https://www.artic.edu/iiif/2/'+id+'/full/843,/0/default.jpg', requestOptions);
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