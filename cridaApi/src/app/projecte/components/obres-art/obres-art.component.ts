import { Component, OnInit } from '@angular/core';
import { API_artist } from '../../model/services/api/artist/API_artist';

import { Artist } from '../../model/implementation/Artist/Artists';

@Component({
  selector: 'app-obres-art',
  templateUrl: './obres-art.component.html',
  styleUrls: ['./obres-art.component.css']
})
export class ObresArtComponent implements OnInit {
  artistes:Array<Artist> = [];

  constructor(private http:API_artist) { 
    this.http.getArtists().subscribe(
    data => {
      let result:Array<any> = data.data;
      result.forEach(artist => {
        this.artistes.push(new Artist(artist));
      });
      console.log(this.artistes)
    });
  }

  ngOnInit(): void {
  }

}
