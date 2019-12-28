import { Component, OnInit } from '@angular/core';
import { TaskTable } from 'src/app/model/task-table';
import { ServiceTaskService } from 'src/app/service/service-task.service';
import { forEach } from '@angular/router/src/utils/collection';
import { Observable } from 'rxjs';
import { Data } from '@angular/router/src/config';

@Component({
  selector: 'app-view-task',
  templateUrl: './view-task.component.html',
  styleUrls: ['./view-task.component.css']
})
export class ViewTaskComponent implements OnInit {
  txtTask: string;
  txtParentTask: number;
  txtPrioriyFrom: number;
  txtPrioriyTo: number;
  dtStartDate: Data;
  dtEndDate: Date;

  allTask: TaskTable[];
  constructor(private taskService: ServiceTaskService) {
  }

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.taskService.getTasks().subscribe(data => {
      this.allTask = data
    });
  }

  endTask(id: any) {
    let taskToEnd: TaskTable;
    if (this.allTask && this.allTask.length > 0) {
      taskToEnd = this.allTask.find(a => a.Task_ID == id);
      if (taskToEnd) {

        taskToEnd.Status = -1;
        this.taskService.updateTask(taskToEnd).subscribe(data => {
          if (data) {
            alert("Task Ended");
            this.getAllTasks();
          }
          else {
            alert("Task is not updated");
          }
        });
      }
    }
  }

  deleteTask(id: string) {
    this.taskService.deleteTask(id).subscribe(data => {

      if (data) {
        this.allTask.splice(this.allTask.findIndex(a => a.Task_ID == id), 1);
      }
      else {
        alert("Task is not deleted");
      }
    });
  }

  disableTask(status: number) {

    if (status == 1) { return false; }
    else { return true; }
  }
}
