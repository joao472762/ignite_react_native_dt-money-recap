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
    transactions: Transactions[]
}

export const TransactionContext = createContext({} as TransactionContextType)

export function TransactionsProvider({children}: TransactionsProviderProps){
    const [transactions, seTransactions] = useState<Transactions[]>([])

    async function featchTransactions(){
        const response = await Api.get('transactions')
        seTransactions(() => response.data)
    }

    useEffect(() => {
        featchTransactions()
    }, [])

    return(
        <TransactionContext.Provider value={{
            transactions
        }}>
            {children}
        </TransactionContext.Provider>
    )
}