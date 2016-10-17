import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from './task.model';
import { CompletenessPipe } from './completeness.pipe';

@Component({
  selector: 'task-list',
  // pipes: 'completeness',
  template: `
    <div *ngFor="let currentTask of childTaskList | completeness:selectedCompleteness">
      <h3>{{ currentTask.description }}  <button class="btn btn-primary" (click)="editButtonHasBeenClicked(currentTask)">Edit</button></h3>
    </div>
    <select (change)="onChange($event.target.value)" class="filter">
      <option value="all">Show All</option>
      <option value="isDone">Show Done</option>
      <option value="notDone" selected="selected">Show Not Done</option>
    </select>
  `
})

export class TaskListComponent {
  public selectedCompleteness: string = "notDone";
  @Input() childTaskList: Task[];
  @Output() clickSender = new EventEmitter();
  editButtonHasBeenClicked(taskToEdit: Task) {
    this.clickSender.emit(taskToEdit);
  }
  onChange(optionFromMenu) {
    this.selectedCompleteness = optionFromMenu;
    console.log(this.selectedCompleteness);
  }
}
