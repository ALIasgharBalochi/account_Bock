import create from 'zustand';

import { Customer,StoreState } from '@/types';

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
