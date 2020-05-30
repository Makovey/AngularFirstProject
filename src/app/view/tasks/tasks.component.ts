import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service';
import {Task} from '../../model/Task';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[];
  dataSource: MatTableDataSource<Task>;
  displayedColumns: string[] = ['color', 'id', 'title', 'date', 'priority', 'category'];

  constructor(private dataHandler: DataHandlerService) {
  }

  ngOnInit(): void {
    this.dataHandler.tasksSubject.subscribe(tasks /* tasks - новое значение */ => this.tasks = tasks /* обновляем текущий массив */);
    this.dataSource = new MatTableDataSource();
    this.refreshTable();
  }

  toggleTaskCompleted(task: Task) {
    task.completed = !task.completed;
  }

  getPriorityColor(task: Task): string {
    if (task.priority && task.priority.color) {
      return task.priority.color;
    }
    return '#fff';
  }

  private refreshTable(): void {
    this.dataSource.data = this.tasks;
  }
}
