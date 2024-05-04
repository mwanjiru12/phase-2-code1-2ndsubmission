// Transactions.js
import React, { useState } from 'react';
import TransactionItem from './TransactionItem';

const Transactions = ({ transactions }) => {
  const [sortBy, setSortBy] = useState('description');
  const [sortOrder, setSortOrder] = useState('asc');

  const sortedTransactions = [...transactions].sort((a, b) => {
    const compareValueA = sortBy === 'description' ? a.description : a.category;
    const compareValueB = sortBy === 'description' ? b.description : b.category;
    const comparison = compareValueA.localeCompare(compareValueB);

    return sortOrder === 'asc' ? comparison : -comparison;
  });

  const handleSortChange = (e) => {
    setSortBy(e.target.value);
  };

  const handleOrderChange = (e) => {
    setSortOrder(e.target.value);
  };

  return (
    <div>
      <div>
        <label>Sort by:</label>
        <select value={sortBy} onChange={handleSortChange}>
          <option value="description">Description</option>
          <option value="category">Category</option>
        </select>
        <select value={sortOrder} onChange={handleOrderChange}>
          <option value="asc">Ascending</option>
          <option value="desc">Descending</option>
        </select>
      </div>
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
          {sortedTransactions.map((transaction) => (
            <TransactionItem
              key={transaction.id}
              date={transaction.date}
              description={transaction.description}
              category={transaction.category}
              amount={transaction.amount}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Transactions;
