import { Debt } from "@/types"
import { useQuery } from "react-query"


export const fetchDebts = async ():Promise<Debt[]> => {
    const res = await fetch('http://localhost:9000/debts')

    if (!res.ok){
        throw new Error('fetchDebts:failed to fetch')
    }

    const d = res.json()

    return d
}

export const useFetchDebts = () => {
    return useQuery('debts',fetchDebts)
}

export const createDebt = async (debt:Debt) => {
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

// delete debt
export const deleteDebt = async (debtId:number) => {
   const res = await fetch(`http://localhost:9000/debt/${debtId}`,{
    method: 'DELETE'
   })

   if (!res.ok) {
     throw new Error(" failed to delete debt")
   }

   return res.json()
}