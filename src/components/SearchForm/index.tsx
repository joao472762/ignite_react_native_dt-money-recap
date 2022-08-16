import { MagnifyingGlass} from "phosphor-react";
import { SearchFormContainer, SearchButton} from "./styles";

export function SearchForm(){
    return(
        <SearchFormContainer>
            <input 
                type="text"
                placeholder="Busque uma transação"
            />

            <SearchButton>
                <MagnifyingGlass/>
                <span>Buscar</span>
            </SearchButton>

        </SearchFormContainer>
    )
}