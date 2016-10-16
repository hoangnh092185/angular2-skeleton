import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div class="container">
    <h1>My First Angular 2 App</h1>
    <h3>One of my favorite bands is: {{ favoriteBand }}</h3>
    <p>If I had to choose a fovierte pointer it would be: {{favoirtePainter}}</p>
    <p>The number of slices of pie I would like is: {{sliceOfPie}}</p>
    <h3>One of my favorite albums is: </h3>
    <p>{{favoriteAlbum.title}}</p>
    <p>By {{favoriteAlbum.artist}}</p>
    <p>Released in {{favoriteAlbum.released}}</p>

  </div>
  `
})

export class AppComponent {
  favoriteBand: string = 'The Kongos';
  favoirtePainter: string = 'Brom';
  sliceOfPie: number = 3;
  favoriteAlbum: Album = new Album("Metallica", "Metallica", 1991);
  }

export class Album {
  constructor (public title: string, public artist: string, public released: number){ }
}
