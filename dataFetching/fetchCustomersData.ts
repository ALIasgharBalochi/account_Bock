import {useEffect} from 'react'
import { useQuery } from 'react-query';
import useStore,{Customer} from '@/store/store'

export const getAllCustomers = () => {
   const fetchCustomers = async (): Promise<Customer[]> => {
    const response = await fetch("http://localhost:9000/customers");
   if (!response.ok) {
     throw new Error("Network response was not ok");
   }
   const data = await response.json();
   return data;
  };

  const setCustomers = useStore((set) => set.setCustomers)
  const customers:Customer[] = useStore((set) => set.customers)

  const {data,error,isLoading} = useQuery<Customer[]>('customers',fetchCustomers)

  useEffect(() => {
    if(data) {
        setCustomers(data)
    }
  },[data,setCustomers])
  
  if (!isLoading) {
    return customers
  }  

  return null
}