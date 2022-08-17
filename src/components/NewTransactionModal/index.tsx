import { X } from 'phosphor-react'
import * as Dialog from '@radix-ui/react-dialog'
import { ArrowCircleUp, ArrowCircleDown } from 'phosphor-react'
    
import {  
    Close,
    Title, 
    Content, 
    Overlay, 
    InputsArea, 
    TransactionsType, 
    TransactionsTypeContainer 
} from './styles'

export function NewTransactionModal(){
    return(
        <Dialog.Portal>
            <Overlay/>
            
            <Content>
                <Title>Nova Transação</Title>
                
                <Close> <X/> </Close>

                <Dialog.Description>
                    <form >

                        <InputsArea>
                            <input 
                                type="text"
                                placeholder='Descrição' 
                            />
                            <input 
                                type="number"
                                placeholder='Preço' 
                            />
                            <input 
                                type="text"
                                placeholder='Categoria' 
                            />
                        </InputsArea>

                        <TransactionsTypeContainer>
                            <TransactionsType variant='income'>
                                <ArrowCircleUp/>
                                <span>Entradas</span>
                            </TransactionsType>

                            <TransactionsType variant='outcome'>
                                <ArrowCircleDown/>
                                <span>Saídas</span>
                            </TransactionsType>
                        </TransactionsTypeContainer>
                        
                        <button><strong>Cadastrar</strong></button>

                    </form>
                </Dialog.Description>
            </Content>
        </Dialog.Portal>
    )
}