import { Component, OnInit } from '@angular/core';
import {TaskService} from '../../../shared/task.service';
import{NgForm} from '@angular/forms';
declare var toastr:any;
@Component({
  selector: 'app-parenttask',
  templateUrl: './parenttask.component.html',
  styleUrls: ['./parenttask.component.css']
})
export class ParenttaskComponent implements OnInit {

  constructor(public taskService:TaskService) { }

  ngOnInit() {
    this.resetForm();
  }
resetForm(form ?:NgForm){
  if(form!=null)
    form.reset(); 
  this.taskService.selectedParenttask={
    Parent_ID:null,
    TaskDescription:''
  }
}
onSubmit(form:NgForm){
  if(form.value.Parent_ID==null){
  this.taskService.postParentTask(form.value)
  .subscribe(data=>{
this.resetForm(form);
this.taskService.getParentTaskList();
toastr.success('New parent task added Succuessfully','Parent Task');
  });
}
else{
  //update
  this.taskService.putParentTask(form.value.Parent_ID,form.value)
  .subscribe(data=>{
this.resetForm(form);
this.taskService.getParentTaskList();
toastr.success('Parent Task updated Succuessfully','Parent Task');
});
}
}
}
