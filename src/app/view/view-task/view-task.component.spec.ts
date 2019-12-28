import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTaskComponent } from './view-task.component';
import { ServiceTaskService } from 'src/app/service/service-task.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ViewTaskFilterPipe } from 'src/app/view-task-filter.pipe';
import{RouterTestingModule} from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import { TaskTable } from 'src/app/model/task-table';

describe('ViewTaskComponent', () => {
  let component: ViewTaskComponent;
  let fixture: ComponentFixture<ViewTaskComponent>;
  let getAllTasksSpy : any;
  let testAllTasks: TaskTable[];

  beforeEach(async(() => {
    const taskServiceSpy = jasmine.createSpyObj('ServiceTaskService',['getTasks'] );
    getAllTasksSpy = taskServiceSpy.getTasks.and.returnValue(of(testAllTasks));
    TestBed.configureTestingModule({
      imports:[FormsModule, ReactiveFormsModule,RouterTestingModule],
      declarations: [ ViewTaskComponent,ViewTaskFilterPipe],
      providers:[ViewTaskComponent, {provide:ServiceTaskService, useValue:taskServiceSpy}]
    })
    .compileComponents();
    component = TestBed.get(ViewTaskComponent);
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTaskComponent);
    component = fixture.componentInstance;
    
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Test_GetAllTasks', () =>{
    component.ngOnInit();
 expect(getAllTasksSpy.calls.any()).toBe(true, 'GetAllTasks called');
  })
});
