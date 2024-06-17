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