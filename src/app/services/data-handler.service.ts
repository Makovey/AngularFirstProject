import {Injectable} from '@angular/core';
import {Category} from '../model/Category';
import {TestData} from '../data/TestData';

@Injectable({
  providedIn: 'root'
})
export class DataHandlerService {

  constructor() {
  }

  /**
   * Метод получает массив данных из TestData
   */
  getCategories(): Category[] {
    return TestData.categories;
  }
}
