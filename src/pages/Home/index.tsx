import { useContext} from "react";

import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Sumary } from "../../components/Sumary/index.";
import { HomeContent, TransactionContainer } from "./styles";
import { TransactionContext } from "../../context/TransactionsContext";
import { dateFomatter, priceFormatter } from "../../services/formatter";



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
                                        <td>{transactions.description}</td>
                                        <td>{priceFormatter.format(transactions.price)}</td>
                                        <td>{transactions.category}</td>
                                        <td>{dateFomatter.format(new Date(transactions.createdAt))}</td>
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