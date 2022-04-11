import { useState } from 'react'
import logopng from '../../assets/logo.svg'
import { Container } from './styles'
import { Content } from './styles'
import Modal from 'react-modal'

interface HeaderProps {
    onOpenNewTransactionModal: () => void;
    
}

export function Header({onOpenNewTransactionModal}: HeaderProps){

   
   
    return(
        <Container>
            <Content>
                <img src={logopng} alt="dtmoney" />
                <button onClick={onOpenNewTransactionModal}>Nova transação</button>
            </Content>
            
        </Container>
    )
}