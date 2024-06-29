import { useQuery } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';
import { Pyment } from '@/app/customer/CustomerComponent/CustomerHeader/AccountInformatino/AccountInformation';
// create payment
export const createPayment = async (payment: { customer: number; amount: number }) => {
    const response = await fetch('http://localhost:9000/pyments', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(payment),
    });
    if (!response.ok) {
        throw new Error('Failed to create payment');
    }
    return response.json();
};

// get payment 
const fetchLatestPayment = async (customerId: number):Promise<Pyment> => {
    const response = await fetch(`http://localhost:9000/pyments/latest/${customerId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch latest payment');
    }
    const d = response.json();
    return d
};

export const useLatestPayment = (customerId: number) => {
    return useQuery(['latestPayment', customerId], () => fetchLatestPayment(customerId));
};
