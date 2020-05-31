import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {Task} from '../model/Task';
import {Observable} from 'rxjs';
import {TaskDAOImpl} from '../data/dao/impls/TaskDAOImpl';
import {CategoryDAOImpl} from '../data/dao/impls/CategoryDAOImpl';

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

}
