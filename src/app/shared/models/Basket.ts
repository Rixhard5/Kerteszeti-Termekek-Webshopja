export interface Basket {
  items: Array<BasketItem>;
}

export interface BasketItem {
  product: string;
  name: string;
  price: number;
  quantity: number;
  id: number;
}
