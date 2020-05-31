import {CommonDAO} from './CommonDAO';
import {Task} from '../../../model/Task';
import {Category} from '../../../model/Category';
import {Priority} from '../../../model/Priority';
import {Observable} from 'rxjs';

export interface TaskDAO extends CommonDAO<Task> {

  // поиск задач по всем параметрам
  search(category: Category, searchText: string, status: boolean, priority: Priority);

  // количество завершенных задач в категории
  getCompletedCountInCategory(category: Category): Observable<number>;

  // количество незавершенных задач в категории
  getUnompletedCountInCategory(category: Category): Observable<number>;

  // количество всех задач в категории
  getTotalCountInCategory(category: Category): Observable<number>;

  // общее количество задач
  getTotalCount(): Observable<number>;
}
