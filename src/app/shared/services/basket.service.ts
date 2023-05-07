import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Basket, BasketItem } from '../../shared/models/Basket';

@Injectable({
  providedIn: 'root'
})
export class BasketService {

  basket = new BehaviorSubject<Basket>({ items: [] });

  constructor() {}

  addToBasket(item: BasketItem): void {
    const items = [...this.basket.value.items];

    const itemInbasket = items.find((_item) => _item.id === item.id);
    if (itemInbasket) {
      itemInbasket.quantity += 1;
    } else {
      items.push(item);
    }

    this.basket.next({ items });
  }

  removeFromBasket(item: BasketItem, updatebasket = true): BasketItem[] {
    const filteredItems = this.basket.value.items.filter(
      (_item) => _item.id !== item.id
    );

    if (updatebasket) {
      this.basket.next({ items: filteredItems });
    }

    return filteredItems;
  }

  removeQuantity(item: BasketItem): void {
    let itemForRemoval!: BasketItem;

    let filteredItems = this.basket.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }

      return _item;
    });

    if (itemForRemoval) {
      filteredItems = this.removeFromBasket(itemForRemoval, false);
    }

    this.basket.next({ items: filteredItems });
  }

  clearBasket(): void {
    this.basket.next({ items: [] });
  }

  getTotal(items: BasketItem[]): number {
    return items
      .map((item) => item.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }
}
