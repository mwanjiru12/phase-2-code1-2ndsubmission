// Transactions.js
import React from 'react';
import TransactionItem from './TransactionItem';

export default function Transactions({ transactions }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Date</th>
          <th>Description</th>
          <th>Category</th>
          <th>Amount</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map((transaction, index) => (
          <TransactionItem
            key={transaction.id}
            index={index}
            date={transaction.date}
            description={transaction.description}
            amount={transaction.amount}
            category={transaction.category}
          />
        ))}
      </tbody>
    </table>
  );
}
