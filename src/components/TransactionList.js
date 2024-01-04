import { useContext } from "react"
import { GlobalContext } from '../context/GlobalContext'
import Transaction from "./Transaction";

export const TransactionList = () => {
  // useContext pull anything from global context
   const { transactions } = useContext(GlobalContext);

  return (
    <>
        <h3>History</h3>
        <ul className="list">
          {transactions.map( transaction => (<Transaction key = {transaction.id} transaction = {transaction}/>))}
            
        </ul>
    </>
  )
}
