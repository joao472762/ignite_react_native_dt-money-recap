import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    align-items: center;
    column-gap: 1rem;

    margin-top: 4rem;

    input{
        flex: 1;
        padding: 1rem;
        border-radius: 6px;
        line-height: 140%;

        background-color: ${( {theme} ) => theme.colors["gray-900"]};

        &::placeholder{
            color: ${( {theme} ) => theme.colors["gray-500"]};;
        }
    }
`

export const SearchButton = styled.button`
    display: flex;
    align-items: center;
    column-gap: .75rem;

    cursor: pointer;
    border-radius: 6px;
    height: 3.37rem;
    padding: 0 2rem;
    background-color: transparent;
    transition: .3s background-color, .3s color;
    color: ${( {theme} ) => theme.colors["green-300"]};
    border: 1px solid ${( {theme} ) => theme.colors["green-300"]};


    svg{
        font-size: 1.25rem;
    }
    span{
        font-weight: bold;
    }
    &:disabled{
        opacity: .7;
    }
    &:not(:disabled):hover{
        background-color: ${( {theme} ) => theme.colors["green-300"]};
        color: ${( {theme} ) => theme.colors.white};
    }
    
`