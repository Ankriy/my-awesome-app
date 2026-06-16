'use client';

import { useState } from 'react';

export default function SearchBar({ onSearch, isLoading }) {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(input);
    setInput('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-6">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Search for a city..."
        className="search-input flex-1"
        disabled={isLoading}
      />
      <button
        type="submit"
        disabled={isLoading}
        className="btn-search"
      >
        {isLoading ? '⏳' : '🔍'}
      </button>
    </form>
  );
}
