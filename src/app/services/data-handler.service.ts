import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';
import {Task} from '../model/Task';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  /**
   * Изадетль, следит за данными
   * дает понять подписчикам
   * произошли ли изменения в Task[]
   */
  tasksSubject = new Subject<Task[]>();

  constructor() {
  }

  /**
   * Метод получает массив данных из TestData
   */
  getCategories(): Category[] {
    return TestData.categories;
  }

  /**
   * next - сигнал подписчикам, на новые данные
   */
  fillTasks() {
    this.tasksSubject.next(TestData.tasks);
  }


  fillTasksByCategory(category: Category) {
    const tasks = TestData.tasks.filter(task => task.category === category);
    this.tasksSubject.next(tasks);
  }
}
