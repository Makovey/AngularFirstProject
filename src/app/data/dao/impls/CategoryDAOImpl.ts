import {CategoryDAO} from '../interfaces/CategoryDAO';
import {Observable, of} from 'rxjs';
import {Category} from '../../../model/Category';
import {TestData} from '../../TestData';

export class CategoryDAOImpl implements CategoryDAO {
  add(category: Category): Observable<Category> {
    return undefined;
  }

  delete(id: number): Observable<Category> {
    return undefined;
  }

  get(id: number): Observable<Category> {
    return undefined;
  }

  getAll(): Observable<Category[]> {
    return of(TestData.categories);
  }

  search(title: string): Observable<Category> {
    return undefined;
  }

  update(category: Category): Observable<Category> {
    return undefined;
  }
}
