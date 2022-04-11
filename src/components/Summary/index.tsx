import React, { useContext } from "react"
import { Container } from "./styles"
import incomeimg from '../../assets/Entradas.svg'
import outcomeimg from '../../assets/Saídas.svg'
import { TransactionsContext } from "../../TransactionsContext"



export function Summary(){

    const {transactions} = useContext(TransactionsContext)

   const summary = transactions.reduce((acc, transaction) =>{
       if(transaction.type === 'deposit'){
           acc.deposits += transaction.amount;
           acc.total += transaction.amount;
       } else{
           acc.withdraws += transaction.amount;
           acc.total -= transaction.amount;

       }
       return acc;


   }, {
       deposits: 0,
       withdraws: 0,
       total: 0,
   })
    

    return(
        <Container>
                <div>
                    <header>
                        <p>Entradas</p>
                        <img src={incomeimg} alt="entradas" />
                        </header>
                        <strong>{new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.deposits)}</strong>
                   
                </div>

                <div>
                    <header>
                        <p>Saídas</p>
                        <img src={outcomeimg} alt="saídas" />
                        </header>
                        <strong>-{new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.withdraws)}</strong>
                    
                </div>

                <div>
                    <header>
                        <p>Total</p>
                        <img src={incomeimg} alt="Total" />
                        </header>
                        <strong>{new Intl.NumberFormat('pt-BR',{
                            style: 'currency',
                            currency: 'BRL'
                        }).format(summary.total)}</strong>
                </div>

        </Container>
        
    )
}