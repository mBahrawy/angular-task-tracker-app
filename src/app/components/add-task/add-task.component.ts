import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {

  text: string = '';
  day: string = '';
  reminder: boolean = false;
  showAddTask: boolean | undefined;
  subscription: Subscription;

  @Output() onAddTask :EventEmitter<Task> = new EventEmitter();

  constructor(private UiService:UiService) { 
    this.subscription = this.UiService.onToggle().subscribe(value=> this.showAddTask = value)
  }

  ngOnInit(): void {
  }

  onSubmit() :void {
    if (this.text.trim().length < 2) {
      alert('Please enter a valid task name');
      return
    }

    const newTask : Task = {
      id: Math.floor(Math.random()*1000000),
      text: this.text,
      day: this.day,
      reminder:this.reminder
    }

    this.text = '';
    this.day = '';
    this.reminder = false;

    this.onAddTask.emit(newTask)
    
  }

} 
