import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskComponent } from './add-task.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import {HttpClientModule} from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { ServiceTaskService } from 'src/app/service/service-task.service';
import { of } from 'rxjs';

describe('AddTaskComponent', () => {
  let component: AddTaskComponent;
  let fixture: ComponentFixture<AddTaskComponent>;
  let getAllTasksSpy : any;
  let testAllTasks: any;

  beforeEach(async(() => {
    const taskServiceSpy = jasmine.createSpyObj('ServiceTaskService',['addTask'] );
    getAllTasksSpy = taskServiceSpy.addTask.and.returnValue(of(testAllTasks));
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule,RouterTestingModule, HttpClientModule],
      declarations: [ AddTaskComponent ],
      providers:[AddTaskComponent,DatePipe, {provide:ServiceTaskService, useValue:taskServiceSpy}]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
