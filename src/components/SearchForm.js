// SearchForm.js
import React from 'react';

export default function SearchForm({ setSearchFilter }) {
  const handleChange = (e) => {
    setSearchFilter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission if needed
  };

  return (
    <form onSubmit={handleSubmit} id="search-form">
      <input autoFocus onChange={handleChange} type="text" id="search" placeholder="Search recent transactions..." />
      <button>Search</button>
    </form>
  );
}
