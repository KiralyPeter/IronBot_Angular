import { Robot } from "./Robot";

export class CartItem{

    constructor(public robot:Robot){}
    quantity:number = 1;
    price:number = this.robot.price;
}