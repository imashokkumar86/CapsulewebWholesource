import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../shared/task.service';
import {Task} from '../../../shared/task.model';
import{NgForm} from '@angular/forms';
import{DatePipe} from'@angular/common';
declare var toastr:any;
@Component({
  selector: 'app-add-tasks',
  templateUrl: './add-tasks.component.html',
  styleUrls: ['./add-tasks.component.css'],
  
})
export class AddTasksComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  ngOnInit() {
    this.taskService.getParentTaskList();
    this.resetForm();
  }

  
resetForm(form ?:NgForm){
  if(form!=null)
    form.reset(); 
  this.taskService.selectedTask={
    Task_ID :0,
    Parent_ID : 0,
    Start_Date :new Date(),
    End_Date :new Date(),
    Priority :0,
    TaskDec :'',
   ParentTaskDesc:''

          }
}
onSubmit(form:NgForm){
  if(form.value.Task_ID==0){
  this.taskService.postTask(form.value)
  .subscribe(data=>{
this.resetForm(form);
this.taskService.getTaskList();
toastr.success('Task Added Succuessfully','Task');

  });
}
else{
  //update
  this.taskService.putTask(form.value.Task_ID,form.value)
  .subscribe(data=>{
this.resetForm(form);
this.taskService.getTaskList();
toastr.success('Task Updated Succuessfully','Task');
});
}
}

}
