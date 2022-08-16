import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(Dialog.Overlay)`
    width: 100vw;
    height: 100vw;
    position: fixed;
    inset: 0;
    background-color: rgba(0,0,0,.6);
`

export const Content = styled(Dialog.Content)`
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    border-radius: 6px;
    padding: 2.5rem 2.5rem 3rem;

    width: 33rem;

    background-color: ${( {theme} ) => theme.colors['gray-800']};

    form{

        button{
            cursor: pointer;
            width: 100%;
            padding: 1rem;
            margin-top: 2.5rem;
            border-radius: 6px;
            transition: .4s background-color;
            background-color: ${( {theme} ) => theme.colors["green-500"]};
            
            &:hover{
                background-color: ${( {theme} ) => theme.colors["green-300"]};;
            }

            strong{
                line-height: 160%   ;
                color: ${( {theme} ) => theme.colors.white};
            }

            

        }
    }
`
export const Title = styled(Dialog.Title)`
   color: ${( {theme} ) => theme.colors.white};
`
export const Close = styled(Dialog.Close)`
    position: absolute;

    top: 1.5rem;
    right: 1.5rem;
    cursor: pointer;
    background-color: transparent;
    line-height: 0;
    
    svg{
        font-size: 1.5rem;
    }
`

export const InputsArea = styled.section`
    display: flex;
    flex-direction: column;
    row-gap: 1rem;

    margin-top: 3rem;

    input{
        padding: 1rem;
        border-radius: 6px;
        line-height: 140%;
        background-color: ${( {theme} ) => theme.colors["gray-900"]};
    }

`

export const TransactionsTypeContainer = styled.section`
    display: grid;
    grid-template-columns: repeat(2,1fr);
    column-gap: 1rem;

    margin-top: 1.5rem;
`

interface TransactionsTypeProps {
    variant: 'income' | 'outcome'
}
export const TransactionsType = styled.div<TransactionsTypeProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: .5rem;

    cursor: pointer;
    height: 3.625rem;
    border-radius: 6px;
    transition: .4s background-color;
    background-color: ${( {theme} ) => theme.colors["gray-700"]};

    svg{
        font-size: 1.25rem;
        color: ${ (props) => (
            props.variant === 'income'
            ? (props.theme.colors['green-300'])
            : (props.theme.colors['red-300'])
        )};
    }

    &:hover{
        background-color: ${( {theme} ) => theme.colors["gray-600"]};;
    }
    
`
