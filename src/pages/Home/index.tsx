import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Sumary } from "../../components/Sumary/index.";
import { TransactionContext } from "../../context/TransactionsContext";
import { Api } from "../../lib/axios";
import { HomeContent, TransactionContainer } from "./styles";

interface Transactions   {
    id: number,
    price: number,
    createdAt : string
    description: string,
    type: 'income' | 'outcome',
}

export function Home(){
    const {transactions} = useContext(TransactionContext)

    return(
        <div>
            <Header/>
            <HomeContent>
                <Sumary/>
                <SearchForm/>

                <TransactionContainer>
                    <table>
                        <tbody>
                            {
                                transactions.map(transactions => (
                                    <tr key={transactions.id}>
                                        <td>Desenvolvimento de site</td>
                                        <td>R$ 12.000,00</td>
                                        <td>Venda</td>
                                        <td>10/04/2022</td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </TransactionContainer>
            </HomeContent>
        </div>
    )
}