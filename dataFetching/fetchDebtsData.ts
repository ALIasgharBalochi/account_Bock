import { Debt } from "@/store/store"
import { useQuery } from "react-query"


const fetchDebts = async ():Promise<Debt[]> => {
    const res = await fetch('http://localhost:9000/debts')

    if (!res.ok){
        throw new Error('fetchDebts:failed to fetch')
    }

    return res.json()
}

export const useFetchDebts = () => {
    return useQuery('debts',fetchDebts)
}

export const createDebt = async (debt: {
    customer: number;
    itemName: string;
    number: number;
    unit: string;
    part: number;
    discount: string;
    itemPrice: number;
    byWhom: string;
  }) => {
    const res = await fetch('http://localhost:9000/debts',{
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(debt)
    })
    
    if (!res.ok) {
        throw new Error('failed to create debt')
    }

    const d = res.json()
    return d
}
