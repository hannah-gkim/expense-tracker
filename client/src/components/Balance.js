import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/format";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  // amounts [-20, 300, -10, 150]
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
  return (
    <div>
      <h4>Your Balance</h4>
      <h1>${numberWithCommas(total)}</h1>
    </div>
  );
}
