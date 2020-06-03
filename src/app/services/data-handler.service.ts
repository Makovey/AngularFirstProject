import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {Task} from '../model/Task';
import {Observable} from 'rxjs';
import {TaskDAOImpl} from '../data/dao/impls/TaskDAOImpl';
import {CategoryDAOImpl} from '../data/dao/impls/CategoryDAOImpl';
import {Priority} from '../model/Priority';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  private taskDAOImpl = new TaskDAOImpl();
  private categoryDAOImpl = new CategoryDAOImpl();

  constructor() {
  }

  getAllTasks(): Observable<Task[]> {
    return this.taskDAOImpl.getAll();
  }

  getAllCategories(): Observable<Category[]> {
    return this.categoryDAOImpl.getAll();
  }

  searchTasks(category: Category, searchText: string, status: boolean, priority: Priority): Observable<Task[]>{
    return this.taskDAOImpl.search(category, searchText, status, priority);
  }
}
