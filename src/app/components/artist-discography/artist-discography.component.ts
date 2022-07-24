import { Component, OnInit } from '@angular/core';
import albumData from '../../data/Albums.json';
import artistData from '../../data/Artist.json';

@Component({
  selector: 'app-artist-discography',
  templateUrl: './artist-discography.component.html',
  styleUrls: ['./artist-discography.component.scss']
})
export class ArtistDiscographyComponent implements OnInit {

  album: any = {};
  artist: any = {};
  background: any = "";
  constructor() { }

  ngOnInit(): void {
    this.artist = artistData;

    this.album = albumData.items.filter((curValue: any, index: Number, self: any) => self.findIndex((t:any) => t.name.toUpperCase() ===
    curValue.name.toUpperCase()) === index);

    this.background = `url(${this.artist.images[0].url}) no-repeat center center`;
  }

}
