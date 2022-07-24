import { Component, OnInit } from '@angular/core';
import data from '../../data/New-releases.json';

@Component({
  selector: 'app-new-releases',
  templateUrl: './new-releases.component.html',
  styleUrls: ['./new-releases.component.scss']
})
export class NewReleasesComponent implements OnInit {

  releases: any = {};
  constructor() { }

  ngOnInit(): void {
    this.releases = data.albums.items;
  } 

}
