import styled from "styled-components";

export const HomeContent = styled.div`
    max-width: 1168px;
    margin: 0 auto;
    padding: 0 1.5rem;
    
`

export const TransactionContainer = styled.main`
    margin-top: 1.5rem;
    overflow: auto;

    table{
        width: 100%;
        border-collapse: separate;  
        border-spacing: 0 .5rem;
    }

    td{
        padding: 1.25rem 2rem;
        line-height: 160%;
        background-color: ${( {theme} ) => theme.colors["gray-700"]};

        &:nth-of-type(1){
            width: 40%;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
        }

        &:nth-of-type(4){
            text-align: right;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }
    }
`