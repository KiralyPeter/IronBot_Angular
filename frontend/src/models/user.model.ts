import { BillingAddress } from "./billingaddress.model";
import { Cart } from "./cart.model";
import { Rental } from "./rental.model";

export interface User {
    id: number;
    username: string;
    passwordHash: string;
    passwordSalt: string;
    email: string;
    phone: string;
    mobile: string;
    firstName: string;
    lastName: string;
    country: string;
    city: string;
    zip: string;
    address: string;
    billingAddressId?: number;
    status: number;
    isValidated: boolean;
    validationUrl: string;
    isAdmin: boolean;
    timeStamp: Date;
    billingAddress: BillingAddress | null;
    carts: Cart[] | null;
    rentals: Rental[] | null;
  }