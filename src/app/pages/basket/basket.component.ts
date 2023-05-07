import { Component, OnDestroy, OnInit } from '@angular/core';
import { Basket, BasketItem } from '../../shared/models/Basket';
import { BasketService } from '../../shared/services/basket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.component.html',
  styleUrls: ['./basket.component.scss']
})
export class BasketComponent implements OnInit, OnDestroy {
  basket: Basket = { items: [] };
  displayedColumns: string[] = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action',
  ];
  dataSource: BasketItem[] = [];
  basketSubscription: Subscription | undefined;

  constructor(private basketService: BasketService) {}

  ngOnInit(): void {
    this.basketSubscription = this.basketService.basket.subscribe((_basket: Basket) => {
      this.basket = _basket;
      this.dataSource = _basket.items;
    });
  }

  getTotal(items: BasketItem[]): number {
    return this.basketService.getTotal(items);
  }

  onAddQuantity(item: BasketItem): void {
    this.basketService.addToBasket(item);
  }

  onRemoveFrombasket(item: BasketItem): void {
    this.basketService.removeFromBasket(item);
  }

  onRemoveQuantity(item: BasketItem): void {
    this.basketService.removeQuantity(item);
  }

  onClearbasket(): void {
    this.basketService.clearBasket();
  }

  onCheckout(): void {
  }

  ngOnDestroy() {
    if (this.basketSubscription) {
      this.basketSubscription.unsubscribe();
    }
  }
}
