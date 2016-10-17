import { Component } from '@angular/core';

@Component({
  selector: 'pies',
  template: `
  <div class="jumbotron">
    <h3>Here are my favorite pies!</h3>
    <div *ngFor="let currentPie of favoritePies">
      <p>{{currentPie}}</p>
    </div>
  </div>
  `
})

export class PiesListComponent {
  favoritePies: string[] = ["Apple", "Banana Cream", "BlueBerry"];
}
