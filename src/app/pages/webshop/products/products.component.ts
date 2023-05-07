import { Component, Input, Output, EventEmitter, OnChanges, OnInit } from '@angular/core';
import { Termek } from '../../../shared/models/Termek';
import { WebshopService } from '../../../shared/services/webshop.service';
import { User } from '../../../shared/models/User';
import { UserService } from '../../../shared/services/user.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit, OnChanges {
  @Input() productInput?: Termek;
  @Output() addToBasket = new EventEmitter();
  loadedProduct?: string;
  user?: User;

  constructor(
    private webshopService: WebshopService,
    private userService: UserService
  ) { }

  ngOnChanges(): void {
    if (this.productInput?.id) {
      this.webshopService.loadProduct(this.productInput.image).subscribe(data => {
        this.loadedProduct = data;
      });
    }
  }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    if (user) {
      this.userService.getById(user.uid).subscribe(data => {
        this.user = data;
      }, error => {
        console.error(error);
      });
    }
  }

  onAddToBasket(): void {
    this.addToBasket.emit(this.productInput);
  }
}
