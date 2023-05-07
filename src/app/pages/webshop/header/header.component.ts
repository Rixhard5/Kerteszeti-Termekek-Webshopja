import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
//import { Basket, BasketItem } from '../../../shared/models/Basket';
//import { BasketService } from '../../../shared/services/basket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnChanges  {
  @Input() webshopObjectInput?: Array<any>;
  @Output() webshopObjectEmitter: EventEmitter<any> = new EventEmitter();
  chosenProduct: any;

  constructor() { }

  ngOnChanges() {
    if (this.webshopObjectInput) {
      this.chosenProduct = this.webshopObjectInput[0];
      this.reload();
    }
  }

  ngOnInit(): void {
       
  }

  reload() {    
    this.webshopObjectEmitter.emit(this.chosenProduct);
  }

  //@Output() columnsCountChange = new EventEmitter<number>();
  //@Output() itemsCountChange = new EventEmitter<number>();
  //@Output() sortChange = new EventEmitter<string>();
  //itemsShowCount = 10;
  //sort = 'desc';

  //private _basket: Basket = { items: [] };
  //itemsQuantity = 0;

  //@Input()
  //get basket(): Basket {
  //  return this._basket;
  //}
//
  //set basket(basket: Basket) {
  //  this._basket = basket;
//
  //  this.itemsQuantity = basket.items
  //    .map((item) => item.quantity)
  //    .reduce((prev, curent) => prev + curent, 0);
  //}
//
  //constructor(private basketService: BasketService) { }
//
  //onColumnsUpdated(colsNum: number): void {
  //  this.columnsCountChange.emit(colsNum);
  //}
//
  //onItemsUpdated(count: number): void {
  //  this.itemsCountChange.emit(count);
  //  this.itemsShowCount = count;
  //}
//
  //onSortUpdated(newSort: string): void {
  //  this.sortChange.emit(newSort);
  //  this.sort = newSort;
  //}
//
  //getTotal(items: BasketItem[]): number {
  //  return this.basketService.getTotal(items);
  //}
//
  //onClearBasket(): void {
  //  this.basketService.clearBasket();
  //}
}
