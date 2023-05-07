import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Termek } from '../../shared/models/Termek';
import { BasketService } from '../../shared/services/basket.service';
import { WebshopService } from '../../shared/services/webshop.service';

@Component({
  selector: 'app-webshop',
  templateUrl: './webshop.component.html',
  styleUrls: ['./webshop.component.scss']
})
export class WebshopComponent implements OnInit, OnDestroy {
  productObject?: Array<Termek>;
  chosenProduct?: Termek;
  productsSubscription: Subscription | undefined;

  constructor(
    private webshopService: WebshopService,
    private basketService: BasketService,
    ) { }

  ngOnInit(): void {
    this.webshopService.loadProductMeta('__products.json').subscribe((data: Array<Termek>) => {      
      this.productObject = data;
    })
  }

  loadProduct(productObject: Termek) {    
    this.chosenProduct = productObject;
  }

  onAddToBasket(product: Termek): void {    
    this.basketService.addToBasket({
      product: product.image,
      name: product.name,
      price: product.price,
      quantity: 1,
      id: product.id,
    });
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
