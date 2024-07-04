
export interface Customer {
  _id: number;
  name: string;
  phone: number;
  photo?:string;
  totalDebt:number
  date: string 
}

export interface Debt {
    _id: number
    customer: Customer;
    itemName:string;
    number:number;
    unit:string;
    part:number;
    byWhom:string;
    date: string;
    discount: string;
    itemPrice: number
}

export interface StoreState {
  customers: Customer[];
  setCustomers: (customers: Customer[]) => void;
  removeCustomer: (customerId:number) => void
  getCustomerById: (customerId:number) => Customer | undefined
  debts: Debt[];
  setDebt: (debts: Debt[]) => void
}

