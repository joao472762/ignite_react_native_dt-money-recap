import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { Card, SumaryContainer } from "./styles";
import { defaultTheme } from "../../global/styles/theme";

export function  Sumary(){
    const {colors} =  defaultTheme
    return (

        <SumaryContainer>
            <Card>
                <header>
                        <h2>Entradas</h2>
                        <ArrowCircleUp color={colors["green-300"]}/>
                </header>
                <strong>R$ 17.400,00</strong>
            </Card>

            <Card>
                <header>
                        <h2>Saídas</h2>
                        <ArrowCircleDown color={colors["red-300"]}/>
                </header>
                <strong>R$ 17.400,00</strong>
            </Card>
            
            <Card isTotalCard>
                <header>
                        <h2>Total</h2>
                        <CurrencyDollar color={colors.white}/>
                </header>
                <strong>R$ 17.400,00</strong>
            </Card>

        </SumaryContainer>
    )
}