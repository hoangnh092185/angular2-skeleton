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
    <h3>Here are my favorite pie!</h3>
    <div class="pie" *ngFor="Let currentPie of favoritePies">
      <p>{{currentPie}}</p>
    </div>
    <div class="album" *ngFor="let album of albums">
    <p>{{album.title}}</p>
    <p>By {{album.artist}}</p>
    <p>Released in {{album.released}}</p>
    </div>

  </div>
  `
})

export class AppComponent {
  favoriteBand: string = 'The Kongos';
  favoirtePainter: string = 'Brom';
  sliceOfPie: number = 3;
  favoriteAlbum: Album = new Album("Metallica", "Metallica", 1991);
  favoritePies: string[] = ["Apple", "Banana Cream", "Blackberry"];
  albums: Album[] = [
    new Album("Pulse", "Pink Floyd", 1995),
    new Album("Funhouse", "The Stooges", 1970),
    new Album("Twilight of the Thunder God", "Amon Amarth", 2008),
    new Album("Dilate", "Ani DiFranco", 1996),
    new Album("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015),
    new Album("Axis Bold As Love", "The Jimi Hendrix Experience", 1967)
  ]
}

export class Album {
  constructor (public title: string, public artist: string, public released: number){ }
}
