import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../shared/task.service';
@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
  providers: [TaskService]
})
export class TaskDetailsComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  ngOnInit() {
  }

}
