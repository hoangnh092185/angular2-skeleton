import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'task-list',
  template: `
    <div class="jumbotron" *ngFor="let currentTask of childTaskList">
      <h3>{{ currentTask.description }}  <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentTask)">Edit</button></h3>
    </div>
  `
})

export class TaskListComponent {
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
}
