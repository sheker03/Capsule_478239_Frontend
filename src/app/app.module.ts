import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AddTaskComponent } from './view/add-task/add-task.component';
import { ViewTaskComponent } from './view/view-task/view-task.component';
import { UpdateTaskComponent } from './view/update-task/update-task.component';
import { ServiceTaskService } from './service/service-task.service';
import { AppComponent } from './app.component';
import { ViewTaskFilterPipe } from './view-task-filter.pipe';


const appRoutes: Routes = [
  { path: 'AddTask', component: AddTaskComponent },
  { path: 'UpdateTask/:Task_ID', component: UpdateTaskComponent },
  { path: 'ViewTask', component: ViewTaskComponent },
  { path: '', component: AddTaskComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ViewTaskComponent,
    UpdateTaskComponent,
    ViewTaskFilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, { enableTracing: true }) ],
  providers: [ServiceTaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
