import { Component, OnInit } from '@angular/core';
import {Jsonp} from '@angular/http'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  // constructor(private _jsonp: Jsonp) { }
  title = 'app';
//   ngOnInit() {
//     this._jsonp.request('https://api.instagram.com/oembed?url=http://instagr.am/p/fA9uwTtkSN/&omitscript=true&callback=JSONP_CALLBACK').subscribe(); 
// 
}