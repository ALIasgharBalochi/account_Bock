import create from 'zustand';

export interface Customer {
  _id: number;
  name: string;
  phone: number;
  photo?:string;
  totalDebt:number
  date: string 
}

interface Debt {
    customer: string;
    itemName:string;
    number:number;
    unit:string;
    part:number;
    byWhom:string;
    date: Date;
    discount: string;
    itemPrice: number
}

interface StoreState {
  customers: Customer[];
  setCustomers: (customers: Customer[]) => void;
  debts: Debt[];
  setDebt: (debts: Debt[]) => void
}

const useStore = create<StoreState>(set => ({
  customers: [],
  setCustomers: (customers) => set({ customers }),
  debts:[],
  setDebt: (debts) => set({debts})
}));

export default useStore;
