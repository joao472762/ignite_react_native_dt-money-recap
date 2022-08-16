import styled from "styled-components";

export const SumaryContainer = styled.section`
    display: grid;
    grid-template-columns: repeat( auto-fit, minmax(15rem, 1fr) );
    gap: 1rem 2rem ; 
    
    margin-top: -5rem;
    overflow: auto;
`
interface CardProps {
    isTotalCard?: boolean
}

export const Card = styled.div<CardProps>`
    border-radius: 6px;
    height: 8.56rem;
    padding:  1.5rem 1.5rem 1.5rem 2rem;
    background-color: ${ ( props ) => 
        (
            props.isTotalCard 
            ? ( props.theme.colors["green-700"] )
            : ( props.theme.colors["gray-600"] )
        )
    };

    header{
        display:  flex;
        justify-content: space-between;
        align-items: flex-start;

        h2{
            font-size: 1rem;
            font-weight: 400;
            line-height: 160%;
        }
        svg{
            font-size: 2rem;
        }
    }

    strong {
        margin-top: .75rem;
        line-height: 160%;
        font-size: 2rem;
    }
`