import {useEffect,useState} from 'react'
import { useQuery } from 'react-query';
import useStore,{Customer} from '@/store/store'

export const getAllCustomers = () => {
   const [Loading,setLoading] = useState(true);
   const [CustomersData,setCustomersData] = useState<Customer[]>([])
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

  useEffect(() => {
        const orderedCustomers: Customer[] = customers?.slice().sort((a,b) => b.date?.localeCompare(a.date));
        setCustomersData(orderedCustomers)
        setLoading(false)
  }, [customers])
  
    
    const CustomersDataPachaged = {isLoading: Loading,Customers: CustomersData}
    return CustomersDataPachaged 
}