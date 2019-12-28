import { Component, OnInit } from '@angular/core';
//import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceTaskService } from 'src/app/service/service-task.service';
import { Console } from '@angular/core/src/console';
import { TaskTable } from 'src/app/model/task-table';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent implements OnInit {
  taskForm = new FormGroup({
    Task_ID: new FormControl(''),
    Parent_ID: new FormControl(''),
    Task_Name: new FormControl('', Validators.required),
    Start_Date: new FormControl(''),
    End_Date: new FormControl(''),
    Priority: new FormControl('', Validators.required)
  })

  newTask: TaskTable;
  result: string;
  taskTable: TaskTable[];

  constructor(private taskService: ServiceTaskService) {
  }


  ngOnInit() {
  }


  onSubmit() {
    if (this.taskForm.valid) {
      this.newTask = this.taskForm.value;
      this.newTask.Status = 1;
      debugger;
      this.taskService.addTask(this.newTask).subscribe(data => { alert('Task added Successfully') });
    }
    else {
      alert('Please enter the valid details.');
    }
  }



  resetTaskForm() {
    this.taskForm.reset();
  }
}



