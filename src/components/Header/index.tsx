import Logo from '../../assets/igniteLogo.svg'
import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header(){
    return(
        <HeaderContainer>        
            <HeaderContent>
                <div>
                    <img src={Logo}/>
                    <h1>DT Money</h1>
                </div>
                
                <NewTransactionButton> Nova Transação </NewTransactionButton>
            </HeaderContent>
        </HeaderContainer>
    )
}