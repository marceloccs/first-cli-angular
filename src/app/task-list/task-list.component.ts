import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.less']
})
export class TaskListComponent{
  tasks = [];
  task="";
  isADM = true;
  add():void{
    this.tasks.push(this.task);
  }
}
