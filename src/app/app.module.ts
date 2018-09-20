import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import{HttpModule} from '@angular/http';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { ParenttaskComponent } from './tasks/parenttask/parenttask.component';
import { ParenttaskListComponent } from './tasks/parenttask-list/parenttask-list.component';
import { TaskDetailsComponent } from './task-details/task-details.component';
import {RouterModule,Routes} from '@angular/router';
import { AddTasksComponent } from './task-details/add-tasks/add-tasks.component';
import { TaskListComponent } from './task-details/task-list/task-list.component';


//import{ToastrModule} from 'ngx-toastr';
@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    ParenttaskComponent,
    ParenttaskListComponent,
    TaskDetailsComponent,
    AddTasksComponent,
    TaskListComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path:'tasks',component:TasksComponent},
      {path:'task-details',component:TaskDetailsComponent}
    ])
    //ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
