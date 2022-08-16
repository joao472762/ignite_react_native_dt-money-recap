import * as Dialog from '@radix-ui/react-dialog'

import Logo from '../../assets/igniteLogo.svg'
import { NewTransactionModal } from '../NewTransactionModal'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header(){
    return(
        <HeaderContainer>        
            <HeaderContent>

                <div>
                    <img src={Logo}/>
                    <h1>DT Money</h1>
                </div>

                <Dialog.Root>
                    <Dialog.Trigger asChild>
                        <NewTransactionButton> Nova Transação </NewTransactionButton>
                    </Dialog.Trigger>

                    <NewTransactionModal/>
                </Dialog.Root>
                
            </HeaderContent>
        </HeaderContainer>
    )
}