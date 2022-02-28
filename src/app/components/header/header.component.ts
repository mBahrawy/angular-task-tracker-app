import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  title: string = 'Task Tracker';
  showAddTask: boolean | undefined = false;
  subscription: Subscription | undefined;

  
  constructor(private UiService:UiService) {
    this.subscription = this.UiService.onToggle().subscribe(value=> this.showAddTask = value)
   }

  toggleAddTask()  {
    this.UiService.toggleAddTask();
  }


  ngOnInit(): void {
  }

}
