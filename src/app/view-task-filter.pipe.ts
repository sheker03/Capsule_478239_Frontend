import { Pipe, PipeTransform } from '@angular/core';
import { TaskTable } from 'src/app/model/task-table';
import { forEach } from '@angular/router/src/utils/collection';

@Pipe({
    name: 'viewTaskFilter', pure: false
})
export class ViewTaskFilterPipe implements PipeTransform {

    transform(taskList: Array<TaskTable>, taskName: any, taskParent: any, taskPriorityFrom: any, taskPriorityTo: any, taskStartDate: any, taskEndDate: any): any {


        if (taskList && taskList.length) {
            return taskList.filter(item => {
                if (taskName && item.Task_Name.toLowerCase().indexOf(taskName.toLowerCase()) === -1) {
                    return false;
                }
                if (taskParent && item.Parent_ID.toLowerCase().indexOf(taskParent.toLowerCase()) === -1) {
                    return false;
                }
                if (taskStartDate && item.Start_Date.toLocaleString().indexOf(taskStartDate.toLocaleString()) === -1) {
                    return false;
                }
                if (taskEndDate && item.End_Date.toLocaleString().indexOf(taskEndDate.toLocaleString()) === -1) {
                    return false;
                }
                if (taskPriorityFrom && taskPriorityTo && (taskPriorityFrom >= item.Priority && item.Priority >= taskPriorityTo)) {
                    return false;
                }
                return true;
            })
        }
        else {
            return taskList;
        }
    }

}
