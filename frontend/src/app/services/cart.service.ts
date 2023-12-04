import { Injectable } from '@angular/core';
import { Cart } from '../shared/models/Cart';
import { BehaviorSubject, Observable } from 'rxjs';
import { Robot } from '../shared/models/Robot';
import { CartItem } from '../shared/models/CartItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cart:Cart = this.getCartFromLocalStorage();
  private carSubject:BehaviorSubject<Cart> = new BehaviorSubject(this.cart);
  constructor() { }

  addToCart(robot:Robot):void{
    let cartItem = this.cart.items.find(item => item.robot.id === robot.id);
    if(cartItem)
      return;

    this.cart.items.push(new CartItem(robot));
    this.setCartToLocalStorage();
  }

  removeFromCart(robotId: string):void{
    this.cart.items = this.cart.items.filter(item => item.robot.id != robotId);
    this.setCartToLocalStorage();
  }

  changeQuantity(robotId: string, quantity: number){
    let cartItem = this.cart.items.find(item => item.robot.id === robotId);
    if(!cartItem) return;

    cartItem.quantity = quantity;
    cartItem.price = quantity * cartItem.robot.price;
    this.setCartToLocalStorage();
  }

  clearCart(){
    this.cart = new Cart();
    this.setCartToLocalStorage();
  }

  getCartObservable():Observable<Cart>{
    return this.carSubject.asObservable();
  }

  private setCartToLocalStorage():void{
    // oh nóóó.. ez mi a lótüdő???
    this.cart.totalPrice = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.price, 0);
    this.cart.totalCount = this.cart.items
    .reduce((prevSum, currentItem) => prevSum + currentItem.quantity, 0);
    const cartJson = JSON.stringify(this.cart);
    localStorage.setItem('Cart', cartJson);
    // notify all the listeners
    this.carSubject.next(this.cart);
  }

  private getCartFromLocalStorage():Cart{
    const cartJson = localStorage.getItem('Cart');
    // ?= ha elérhető := ha nem érhető el
    return cartJson? JSON.parse(cartJson): new Cart();
  }

}
