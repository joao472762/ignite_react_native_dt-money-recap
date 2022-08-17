import { ArrowCircleUp, ArrowCircleDown, CurrencyDollar } from 'phosphor-react'

import { useSumary } from '../../hooks/sumary';
import { Card, SumaryContainer } from "./styles";
import { defaultTheme } from "../../global/styles/theme";
import { priceFormatter } from '../../services/formatter';

export function  Sumary(){
    const sumary = useSumary()
    const {colors} =  defaultTheme

    return (

        <SumaryContainer>
            <Card>
                <header>
                        <h2>Entradas</h2>
                        <ArrowCircleUp color={colors["green-300"]}/>
                </header>
                <strong>{priceFormatter.format(sumary.income)}</strong>
            </Card>

            <Card>
                <header>
                        <h2>Saídas</h2>
                        <ArrowCircleDown color={colors["red-300"]}/>
                </header>
                <strong>{priceFormatter.format(sumary.outcome)}</strong>
            </Card>
            
            <Card isTotalCard>
                <header>
                        <h2>Total</h2>
                        <CurrencyDollar color={colors.white}/>
                </header>
                <strong>{priceFormatter.format(sumary.total)}</strong>
            </Card>

        </SumaryContainer>
    )
}