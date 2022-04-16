import { Company } from "../company/company";
import { TransactionDetails } from "./transaction-details";

export class Transaction {
    constructor(){};
    id?: number;
    company: Company;
    totalPrice?: number;
    createdDate?: Date;
    listDetails: TransactionDetails[];
  }
  