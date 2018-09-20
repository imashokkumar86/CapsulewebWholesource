import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../shared/task.service';
import {Parent_Task} from '../../../shared/parenttask.model';
declare var toastr:any;
@Component({
  selector: 'app-parenttask-list',
  templateUrl: './parenttask-list.component.html',
  styleUrls: ['./parenttask-list.component.css']
})
export class ParenttaskListComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  ngOnInit() {
    this.taskService.getParentTaskList();
  }
  showorEdit(parenttsk:Parent_Task){
    this.taskService.selectedParenttask=Object.assign({},parenttsk);
  }
  onDelete(id:number){
    if(confirm('Are you sure to delete this record ?')==true){
      this.taskService.deleteParenttask(id)
      .subscribe(x=>{
        this.taskService.getParentTaskList();
              });
        }
        toastr.info('Deleted Task','Parent Task');
  }
}
