import { Product } from "../product/product";

export class TransactionDetails {
    constructor(){};
    id?: number;
    quantity?: number;
    price?: number;
    totalPrice?: number;
    product?: Product;
    notes?: string;
  }
  