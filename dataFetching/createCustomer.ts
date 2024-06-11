export const createCustomerFunc = async (data:FormData):Promise<any> => {
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