import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TaskTable } from 'src/app/model/task-table';
import { Observable } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
import { Console } from '@angular/core/src/console';
import { HttpParams } from '@angular/common/http/src/params';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class ServiceTaskService {

  serviceURL: string = "http://localhost/TaskManagerService/";

  constructor(private http: HttpClient) { }


  getTasks(): Observable<TaskTable[]> {
    return this.http.get<TaskTable[]>(this.serviceURL + 'GetAllTasks');

  }

  getTaskByID(taskID: string): Observable<TaskTable> {
    return this.http.get<TaskTable>(this.serviceURL + 'GetTaskByID', { params: { id: taskID } });
  }

  getTasksByProjectID(projectID: string): Observable<TaskTable[]> {
    return this.http.get<TaskTable[]>(this.serviceURL + 'GetAllTasksByProjectID', { params: { id: projectID } });
  }


  addTask(taskToAdd: TaskTable): Observable<TaskTable> {

    return this.http.post<TaskTable>(this.serviceURL + 'PostTask', taskToAdd, httpOptions);
  }

  updateTask(taskToUpdate: TaskTable): Observable<TaskTable> {
    return this.http.put<TaskTable>(this.serviceURL + 'UpdateTask', taskToUpdate, httpOptions);
  }

  deleteTask(taskID: string): Observable<any> {
    return this.http.delete<any>(this.serviceURL + 'DeleteTask', { params: { id: taskID } });
  }
}
