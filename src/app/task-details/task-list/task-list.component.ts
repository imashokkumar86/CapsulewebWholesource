import { Component, OnInit} from '@angular/core';
import {TaskService} from '../../../shared/task.service';
import {Task} from '../../../shared/Task.model';
declare var toastr:any;

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css'],

})
export class TaskListComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  ngOnInit() {
    this.taskService.getParentTaskList();
    this.taskService.getTaskList();
    
  }
  showorEdit(task:Task){
    //task.End_Date=new Date(task.End_Date.toDateString() );
    task.ParentTaskDesc=task.ParentTaskDesc;
    this.taskService.selectedTask=Object.assign({},task);
    
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this record ?')==true){
      this.taskService.deletetask(id)
      .subscribe(x=>{
        this.taskService.getTaskList();
              });
        }
        toastr.info('Deleted Task','Task');
  }

}
