import { useQuery } from 'react-query';
import { useMutation, useQueryClient } from 'react-query';
// create payment
export const createPayment = async (payment: { customerId: number; amount: number }) => {
    const response = await fetch('http://localhost:9000/payments', {
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
// const queryClient = useQueryClient();
//     return useMutation(createPayment, {
//         onSuccess: () => {
//             queryClient.invalidateQueries('latestPayment');
//         },
//     });
// };

// get payment 
const fetchLatestPayment = async (customerId: number) => {
    const response = await fetch(`http://localhost:9000/payments/latest/${customerId}`);
    if (!response.ok) {
        throw new Error('Failed to fetch latest payment');
    }
    return response.json();
};

export const useLatestPayment = (customerId: number) => {
    return useQuery(['latestPayment', customerId], () => fetchLatestPayment(customerId));
};
