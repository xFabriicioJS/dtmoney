import {TransactionsContext} from '../../TransactionsContext';
import { useContext } from 'react';
import Modal from 'react-modal'
import {Container, ButtonType} from './styles'
import {TransactionsTypeContainer} from './styles'
import incomeimg from '../../assets/Entradas.svg';
import oucomeimg from '../../assets/Saídas.svg'

import { FormEvent, useState } from 'react';




interface NewTransactionsModalProps {
    isOpen: boolean;
    onRequestClose: () =>void;
}




export const NewTransactionModal = ({isOpen, onRequestClose} : NewTransactionsModalProps) => {

const {createTransaction} = useContext(TransactionsContext)
const [type, setType] = useState('deposit')
const [title, setTitle] = useState('');
const [amount, setAmount] = useState(0);
const [category, setCategory] = useState('');

async function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    
    
    await createTransaction({
        title,
        amount,
        category,
        type,
    })
    setType('deposit')
    setTitle('')
    setAmount(0)
    setCategory('')
    onRequestClose();
    }
    


return(
    <Modal 
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
    >
        <Container>
        <h2>Cadastrar transação</h2>
        <input type="text" placeholder="Nome" value={title} onChange={(event)=>setTitle(event.target.value)}/>
        <input type="number" placeholder="Valor" value={amount} onChange={(event)=>setAmount(Number(event.target.value))} />
        <TransactionsTypeContainer>
                <ButtonType
                isActive={type === 'deposit'}
                type="button"
                
                onClick={()=>setType('deposit')}
                activeColor="red"
                >
                <img src={incomeimg} alt="Entradas" />
                <span>Entrada</span>
                </ButtonType>

                <ButtonType
                type="button"
                onClick={()=>setType('withdraw')}
                isActive={type === 'withdraw'}
                activeColor="red"
                >
                <img src={oucomeimg} alt="Saída" />
                <span>Saída</span>
                </ButtonType>
        </TransactionsTypeContainer>
        <input placeholder="Categoria" value={category} onChange={(event)=>setCategory(event.target.value)}/>
        <button type="submit" onClick={handleCreateNewTransaction}>Cadastar</button>
        </Container>
    </Modal>
)

}