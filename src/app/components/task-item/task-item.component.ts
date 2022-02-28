import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from "../../Task"
import { faTimes } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss']
})
export class TaskItemComponent implements OnInit {

  @Input() task: Task | undefined;
  @Output() onDeleteTask :EventEmitter<Task>  = new EventEmitter();
  @Output() onToggleTask :EventEmitter<Task>  = new EventEmitter();

  faTimes = faTimes;

  constructor() { }

  onDelete(task: Task) :void {  
    this.onDeleteTask.emit(task)
  }

  onToggle(task: Task) :void{
    this.onToggleTask.emit(task)
  }
  
  ngOnInit(): void {
  }

}
