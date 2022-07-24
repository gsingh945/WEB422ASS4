import { Component, OnInit } from '@angular/core';
import albumData from '../../data/Album.json';

@Component({
  selector: 'app-album',
  templateUrl: './album.component.html',
  styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {

  album: any = {};
  constructor() { }

  ngOnInit(): void {
    this.album = albumData;
  }

}
