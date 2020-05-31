import {PriorityDAO} from '../interfaces/PriorityDAO';
import {Priority} from '../../../model/Priority';
import {Observable} from 'rxjs';

export class PriorityDAOImpl implements PriorityDAO{
  add(T): Observable<Priority> {
    return undefined;
  }

  delete(id: number): Observable<Priority> {
    return undefined;
  }

  get(id: number): Observable<Priority> {
    return undefined;
  }

  getAll(): Observable<Priority[]> {
    return undefined;
  }

  update(T): Observable<Priority> {
    return undefined;
  }
}
