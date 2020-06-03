import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {DataHandlerService} from '../../services/data-handler.service';
import {Category} from '../../model/Category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  @Input()
  categories: Category[];

  @Output()
  selectCategory = new EventEmitter<Category>();

  selectedCategory: Category;

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
    // this.dataHandler.getAllCategories().subscribe(categories => this.categories = categories);
  }

  showTasksByCategory(category: Category) {
    // если категория не изменилась, ничего не делать
    if (this.selectedCategory === category) {
      return;
    }

    // сохраняем выбранную категорию
    this.selectedCategory = category;

    this.selectCategory.emit(this.selectedCategory);
  }
}
