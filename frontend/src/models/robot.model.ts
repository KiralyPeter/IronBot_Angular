import { Cart } from "./cart.model";
import { Category } from "./category.model";
import { Rental } from "./rental.model";

export interface Robot {
  id: number;
  name: string;
  description: string;
  thumbnailUrl: string;
  photoUrl: string;
  categoryId: number;
  manufacturer: string;
  manufactureYear?: number;
  rentalFee: number;
  deposit: number;
  status: number;
  category: Category;
  carts: Cart[];
  rentals: Rental[];
}