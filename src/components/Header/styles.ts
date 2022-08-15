import styled from "styled-components";

export const HeaderContainer = styled.header`
    height: 13.25rem;
    padding-top: 2.5rem;
    background-color:  ${( {theme} ) => theme.colors["gray-900"]};
`

export const HeaderContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    margin: 0 auto;
    max-width: 1168px;
    padding: 0 1.5rem;

    div{
        display: flex;
        align-items: center;
        column-gap: 1rem;

        h1{
            font-size: 1.6rem;
            color: ${( {theme} ) => theme.colors["gray-100"]};
        }
        img{
            width: 2.5rem;
        }
    }
`

export const NewTransactionButton = styled.button`
    cursor: pointer;
    font-weight: bold;
    border-radius: 6px;
    padding: 0 1.25rem;
    height: 3.12rem;
    color: ${( {theme} ) => theme.colors.white};
    background-color: ${( {theme} ) => theme.colors["green-500"]};

    &:hover{
        transition: .5s background-color;
        background-color: ${( {theme} ) => theme.colors["green-300"]};
    }
`