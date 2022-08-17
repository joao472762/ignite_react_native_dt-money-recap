import * as zod from 'zod'
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { MagnifyingGlass} from "phosphor-react";
import {zodResolver} from '@hookform/resolvers/zod'

import { SearchFormContainer, SearchButton} from "./styles";
import { TransactionContext } from "../../context/TransactionsContext";

const SearchFormSchema = zod.object({
    query: zod.string()
})

type SearchFormInputs = zod.infer<typeof SearchFormSchema>


export function SearchForm(){
    const {featchTransactions} = useContext(TransactionContext)

    const { 
            register, 
            handleSubmit, 
            formState:{isSubmitting}

        } = ( useForm<SearchFormInputs>({
            resolver: zodResolver(SearchFormSchema)
            }
    ))

    async function handleSearchTransactions(data:SearchFormInputs){
        await featchTransactions(data.query)
    }

    return(
        <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)} >
            <input
                {...register('query')}
                type="text"
                placeholder="Busque uma transação"
            />

            <SearchButton disabled={isSubmitting}>
                <MagnifyingGlass/>
                <span>Buscar</span>
            </SearchButton>

        </SearchFormContainer>
    )
}