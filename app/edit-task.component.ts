import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'edit-task',
  template: `
    <div class="jumbotron row" *ngIf="childSelectedTask">
      <h1>Edit Task</h1>
      <div class="col-sm-12">
        <label>Enter Task Description:</label>
        <input class="form-control" [(ngModel)]="childSelectedTask.description">
      </div>
      <div class="col-sm-12">
        <label>Enter Task ID:</label>
        <input class="form-control" [(ngModel)]="childSelectedTask.id">
        <button class="btn btn-success" (click)="doneClicked()">Done</button>
      </div>
    </div>
  `
})

export class EditTaskComponent {
  @Input() childSelectedTask: Task;
  @Output() doneClickedSender = new EventEmitter();
  doneClicked() {
    this.doneClickedSender.emit();
  }
}
