import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import Transaction from "./Transaction";

const TransactionList = () => {
  const { transactions } = useContext(GlobalContext);

  // console.log(context);

  return (
    <>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} /> 
          // Note that Strings as an ID woould result in identical ID so better use some variable and note a string in this case:
          // {Transaction.id} instead of "Transaction.id"
        ))}
      </ul>
    </>
  );
};

export default TransactionList;
