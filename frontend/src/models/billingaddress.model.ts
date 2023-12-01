import { User } from "./user.model";

export interface BillingAddress {
    id: number;
    fullName: string;
    vatnumber: string;
    country: string;
    city: string;
    zip: string;
    address: string;
    users: User[];
  }