import { Injectable } from '@angular/core';
import {Parent_Task} from './parenttask.model';
import {Task} from './Task.model';
import{Http,Response,Headers,RequestOptions,RequestMethod} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import  'rxjs/add/operator/toPromise';

@Injectable()
export class TaskService {

  selectedParenttask:Parent_Task;
  selectedTask:Task;
  parentTaskList:Parent_Task[];
  taskList:Task[];
  constructor(private http: Http) { }
  /********** Start Parent task service ************/
//Add parent task
  postParentTask(parent_Task:Parent_Task){
    var body=JSON.stringify(parent_Task);
    let headers : Headers= new Headers();
    headers.append('Content-Type','application/json');
headers.append('Access-Control-Allow-Origin','*');
  headers.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  headers.append('Access-Control-Allow-Headers','Content-Type');

  let options = new RequestOptions({ headers: headers });
   
    return this.http.post('https://capsuleappservice.azurewebsites.net/api/Parent',body,options).map(x=>x.json());
  }
//Update parent task
  putParentTask(id,parent_Task){
    var body=JSON.stringify(parent_Task);
    let headers : Headers= new Headers();
    headers.append('Content-Type','application/json');
headers.append('Access-Control-Allow-Origin','*');
  headers.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
  headers.append('Access-Control-Allow-Headers','Content-Type');

  let options = new RequestOptions({ headers: headers });
   
    return this.http.put('https://capsuleappservice.azurewebsites.net/api/Parent/'+id,body,options).map(x=>x.json());
  }
  //Get parent task
getParentTaskList(){
  this.http.get('https://capsuleappservice.azurewebsites.net/api/Parent')
  .map((data:Response)=>{
return data.json() as Parent_Task[];
  }).toPromise().then(x=>{
    this.parentTaskList=x;
  })
}
//delete parent task
deleteParenttask(id:number){
  return this.http.delete('https://capsuleappservice.azurewebsites.net/api/Parent/'+id).map(x=>x.json());
 
}

 /********** End Parent task service ************/


   /********** Start  task service ************/
//Add task
postTask(task:Task){
  var body=JSON.stringify(task);
  let headers : Headers= new Headers();
  headers.append('Content-Type','application/json');
headers.append('Access-Control-Allow-Origin','*');
headers.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
headers.append('Access-Control-Allow-Headers','Content-Type');

let options = new RequestOptions({ headers: headers });
 
  return this.http.post('https://capsuleappservice.azurewebsites.net/api/Tasks',body,options).map(x=>x.json());
}
//Update task
putTask(id,task){
  var body=JSON.stringify(task);
  let headers : Headers= new Headers();
  headers.append('Content-Type','application/json');
headers.append('Access-Control-Allow-Origin','*');
headers.append('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
headers.append('Access-Control-Allow-Headers','Content-Type');

let options = new RequestOptions({ headers: headers });
 
  return this.http.put('https://capsuleappservice.azurewebsites.net/api/Tasks/'+id,body,options).map(x=>x.json());
}
//Get task
getTaskList(){
this.http.get('https://capsuleappservice.azurewebsites.net/api/Tasks')
.map((data:Response)=>{
return data.json() as Task[];
}).toPromise().then(x=>{
  this.taskList=x;
})
}
//delete task
deletetask(id:number){
return this.http.delete('https://capsuleappservice.azurewebsites.net/api/Tasks/'+id).map(x=>x.json());
}
}
/********** End  task service ************/