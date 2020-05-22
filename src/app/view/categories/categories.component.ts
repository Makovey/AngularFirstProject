import {Component, OnInit} from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];

  /**
   * Тестовые данные из TestData передается в сервис
   * Сервис (injectable) передает данные компоненту
   * @param dataHandler - экземпляр сервиса
   */
  constructor(private dataHandler: DataHandlerService) {
  }

  /**
   * Метод отрабатывает после инициализации комппонента
   */
  ngOnInit(): void {
    this.categories = this.dataHandler.getCategories();
  }

}
