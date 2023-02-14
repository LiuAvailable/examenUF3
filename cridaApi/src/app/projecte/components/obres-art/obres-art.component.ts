import { Component, OnInit } from '@angular/core';
import { API_artist } from '../../model/services/api/artist/API_artist';
import { API_artwork } from '../../model/services/api/artwork/API_artwork';

import { Artist } from '../../model/implementation/artist/Artists';
import { Artwork } from '../../model/implementation/artwork/Artwork';

@Component({
  selector: 'app-obres-art',
  templateUrl: './obres-art.component.html',
  styleUrls: ['./obres-art.component.css']
})

export class ObresArtComponent {
  artistes:Array<Artist> = [];
  obres:Array<Artwork> = [];
  selectedImg:string = '';
  artist!:Artist;

  constructor(private httpA:API_artist, private httpW:API_artwork) { 
    this.httpA.getArtists().subscribe(
    data => {
      let result:Array<any> = data.data;
      result.forEach(artist => {
        this.artistes.push(new Artist(artist));
      });
      console.log(result);
    });

    this.httpW.getArtworks().subscribe(
      data => {
        let result:Array<any> = data.data;
        result.forEach(art => {
          this.obres.push(new Artwork(art));
        });
        console.log(result);
      });
  }

  mostrarImg(img:string, autor:number){
    this.getArtist(autor)
    this.getImg(img)
  }
 
  getArtist(autor:number){
    this.httpA.getArtist(autor).subscribe(
      data => {
        this.artist= new Artist(data.data)
        console.log(this.artist);
      }
    )
  }

  getImg(img:string){
    this.httpW.getImatge(img).subscribe(
      data => {
        console.log(data);
        this.selectedImg = data.data;
      }
    )
  }


}
