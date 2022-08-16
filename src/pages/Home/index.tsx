import { Header } from "../../components/Header";
import { SearchForm } from "../../components/SearchForm";
import { Sumary } from "../../components/Sumary/index.";
import { HomeContent } from "./styles";

export function Home(){
    return(
        <div>
            <Header/>
            <HomeContent>
                <Sumary/>
                <SearchForm/>
            </HomeContent>
        </div>
    )
}