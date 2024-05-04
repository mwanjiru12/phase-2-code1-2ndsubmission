// App.js
import './App.css';
import React, { useEffect, useState } from 'react';
import Transactions from './components/Transactions';
import NewTransactionForm from './components/NewTransactionForm';
import SearchForm from './components/SearchForm'; // Import the SearchForm component
import { transactionsData } from './components/TransactionData'; // Import transaction data

function App() {
  const [searchFilter, setSearchFilter] = useState("");
  const [transactions, setTransactions] = useState(() => {
    // Retrieve transactions from local storage, or initialize with imported data
    const storedTransactions = localStorage.getItem('transactions');
    return storedTransactions ? JSON.parse(storedTransactions) : transactionsData;
  });

  useEffect(() => {
    // Save transactions to local storage whenever it changes
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  const handleUpdateOnSubmission = (newTransaction) => {
    // Handle submission of new transaction
    // Implement logic to update transactions state
    setTransactions(currentTransactions => [...currentTransactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    searchFilter === "" ? true : transaction.description.toUpperCase().includes(searchFilter.toUpperCase())
  );

  return (
    <div className="ui raise segment">
      <div className='header-text'>
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <SearchForm setSearchFilter={setSearchFilter} />
      <NewTransactionForm onSubmission={handleUpdateOnSubmission} />
      <Transactions transactions={filteredTransactions} />
    </div>
  );
}

export default App;
