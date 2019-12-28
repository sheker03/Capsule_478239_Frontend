import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ServiceTaskService } from 'src/app/service/service-task.service';
import { DatePipe } from '@angular/common';

@Component({
    selector: 'app-update-task',
    templateUrl: './update-task.component.html',
    styleUrls: ['./update-task.component.css'],
    providers: [DatePipe]
})

export class UpdateTaskComponent implements OnInit {
    taskForm = new FormGroup({
        Task_ID: new FormControl(''),
        Parent_ID: new FormControl(''),
        Task_Name: new FormControl('', Validators.required),
        Start_Date: new FormControl(''),
        End_Date: new FormControl(''),
        Priority: new FormControl('', Validators.required),
        Status: new FormControl('')
    })

    constructor(private taskService: ServiceTaskService, private route: ActivatedRoute, private datePipe: DatePipe) { }

    ngOnInit() {
        this.loadTask()
    }
    loadTask() {
        if (this.route.snapshot.paramMap.get('Task_ID')) {
            this.taskService.getTaskByID(this.route.snapshot.paramMap.get('Task_ID'))
                .subscribe(data => {
                    data.Start_Date = data.Start_Date.toString().split('T')[0];
                    data.End_Date = data.End_Date.toString().split('T')[0];
                    this.taskForm.setValue(data);
                });
        }
        else {
            console.log("Task ID not found");
        }
    }

    onSubmit() {
        debugger;
        this.taskService.updateTask(this.taskForm.value)
            .subscribe(data => { 
                alert("Task Updated Sucessfully");
                 });
    }

    cancel() {
        debugger;
        this.loadTask();
    }

}
