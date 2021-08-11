import React, { useContext, useEffect } from "react";
import { GlobalContext, getTransactions } from "../context/GlobalState";
import Transaction from "./Transaction";

export default function TransactionList() {
  const { transactions, getTransactions } = useContext(GlobalContext);
  useEffect(()=>{
    getTransactions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions.map((transaction) => (
          <Transaction key={transaction.id} transaction={transaction} />
        ))}
      </ul>
    </div>
  );
}
