import { useQuery } from 'react-query';
import { Customer } from '@/types';
const URL:string = 'http://localhost:9000'

// getAll customer 
export const fetchCustomers = async () => {
  const res = await fetch(`${URL}/customers`)
  
  if (!res.ok) {
    throw new Error('fetchCustomers:failed fetch customers')
  }
 
  const data = res.json()
  return data
}

export const useFetchCustomers = () => {
  return useQuery('customers',fetchCustomers)
}
// create customer 
export const createCustomerFunc = async (data:FormData):Promise<Customer> => {
    const res = await fetch('http://localhost:9000/customers', {
        method: 'POST',
        body:data 
    })

    if (!res.ok) {
        throw new Error('Network response was not ok')
    }

    const d = res.json()
    return d
}

// gerCustomer by id
export const fetchCustomerById = async (id:number) => {
  const res = await fetch(`${URL}/customer/${id}`)

  if (!res.ok) {
    throw new Error('fetchCustomerById:failed to fetch customer')
  }

   return res.json()
}

// create useFetchCustomer by id
export const useFetchCustomerById = (id:number) => {
  return useQuery(['customer',id], () => fetchCustomerById(id))
} 

// delete customer 
export const deleteCustomer = async (customerId:number) => {
   const res = await fetch(`http://localhost:9000/customer/${customerId}`,{
    method: 'DELETE'
   })

   if (!res.ok) {
     throw new Error(" customer not found")
   }

   return res.json()
}