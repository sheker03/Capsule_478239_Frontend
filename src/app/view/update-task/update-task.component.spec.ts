import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTaskComponent } from './update-task.component';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ServiceTaskService } from 'src/app/service/service-task.service';
import {DatePipe} from '@angular/common';
import { of } from 'rxjs';

describe('UpdateTaskComponent', () => {
  let component: UpdateTaskComponent;
  let fixture: ComponentFixture<UpdateTaskComponent>;
  let getAllTasksSpy : any;
  let testAllTasks: any;

  beforeEach(async(() => {
    const taskServiceSpy = jasmine.createSpyObj('ServiceTaskService',['updateTask'] );
    getAllTasksSpy = taskServiceSpy.updateTask.and.returnValue(of(testAllTasks));
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule,RouterTestingModule],
      declarations: [ UpdateTaskComponent ],
      providers:[UpdateTaskComponent,DatePipe,{provide:ServiceTaskService, useValue:taskServiceSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
 