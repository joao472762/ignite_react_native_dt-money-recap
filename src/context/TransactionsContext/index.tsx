import { createContext, ReactNode, useEffect, useState } from "react"

import { Api } from "../../lib/axios"

interface Transactions   {
    id: number,
    price: number,
    category: string,
    createdAt : string
    description: string,
    type: 'income' | 'outcome',
}

interface TransactionsProviderProps {
    children: ReactNode
}

interface TransactionContextType  {
    transactions: Transactions[],
    featchTransactions: (query: string) => Promise<void>
}


export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, seTransactions] = useState<Transactions[]>([])

    async function featchTransactions( query?: string){

        if(query){
            const response = await Api.get('transactions',{
                params:{
                    q: query
                }
            })

            seTransactions(() => response.data)
            
        }
        else{

            const response = await Api.get('transactions')
            seTransactions(() => response.data)
        }
    }

    useEffect(() => {
        featchTransactions()
    }, [])

    return(
        <TransactionContext.Provider value={{
                transactions,
                featchTransactions,
            }}
        >
            {children}
        </TransactionContext.Provider>
    )
}