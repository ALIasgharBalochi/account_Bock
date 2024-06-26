import create from 'zustand';
// import { persist } from 'zustand/middleware';

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

interface StoreState {
  customers: Customer[];
  setCustomers: (customers: Customer[]) => void;
  removeCustomer: (customerId:number) => void
  getCustomerById: (customerId:number) => Customer | undefined
  debts: Debt[];
  setDebt: (debts: Debt[]) => void
}

const useStore = create<StoreState>((set,get)=> ({
  customers: [],
  setCustomers: (customers) => set({ customers }),
  removeCustomer: (customerId:number) =>
    set((state) => ({
      customers: state.customers.filter((customer) => customer._id !== customerId),
  })),
  getCustomerById: (customerId) =>{
     return get().customers.find((customer:Customer) => customer._id === customerId) 
  },
  debts:[],
  setDebt: (debts) => set({debts})
}));

export default useStore;
