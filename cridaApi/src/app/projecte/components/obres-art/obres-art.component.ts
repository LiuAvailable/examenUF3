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
    });

    this.httpW.getArtworks().subscribe(
      data => {
        let result:Array<any> = data.data;
        result.forEach(art => {
          this.obres.push(new Artwork(art));
        });
      });
  }

  mostrarImg(img:string, autor:number){
    this.getArtist(autor)
    if(img != null) this.selectedImg = "https://www.artic.edu/iiif/2/"+img+"/full/843,/0/default.jpg";
    document.querySelector('.imgInfo')?.classList.add('hide');
  }
 
  getArtist(autor:number){
    this.httpA.getArtist(autor).subscribe(
      data => {
        this.artist= new Artist(data.data)
      }
    )
  }

  showData(){
    document.querySelector('.imgInfo')?.classList.remove('hide');
  }

  submit(pagines:string, index:string){
    if(pagines == '') pagines = '12'
    if(index == '') index = '1'
    this.httpW.getArtworksFilter(pagines, index).subscribe(
      data => {
        console.log(data)
        let result:Array<any> = data.data;
        let newObres:Array<Artwork> = [];
        result.forEach(art => {
          newObres.push(new Artwork(art));
        });
        this.obres = newObres;
      });
  }


}
