import { Header } from "../../components/Header";
import { Sumary } from "../../components/Sumary/index.";
import { HomeContent } from "./styles";

export function Home(){
    return(
        <div>
            <Header/>
            <HomeContent>
                <Sumary/>
            </HomeContent>
        </div>
    )
}