import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Sumary } from "../../components/Sumary/index.";
import { HomeContent, TransactionContainer } from "./styles";

export function Home(){
    return(
        <div>
            <Header/>
            <HomeContent>
                <Sumary/>
                <SearchForm/>

                <TransactionContainer>
                    <table>
                        <tbody>
                            <tr>
                                <td>Desenvolvimento de site</td>
                                <td>R$ 12.000,00</td>
                                <td>Venda</td>
                                <td>10/04/2022</td>

                            </tr>
                            <tr>
                                <td>Desenvolvimento de site</td>
                                <td>R$ 12.000,00</td>
                                <td>Venda</td>
                                <td>10/04/2022</td>

                            </tr>
                        </tbody>
                    </table>
                </TransactionContainer>
            </HomeContent>
        </div>
    )
}