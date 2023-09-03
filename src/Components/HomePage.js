// components/HomePage.js
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { searchWord } from '../actions/wordActions';

function HomePage({ searchWord }) {
  const [word, setWord] = useState('');

  const handleSearch = () => {
    if (word.trim() !== '') {
      searchWord(word);
      setWord('');
    }
  };

  return (
    <div>
      <h1>Dictionary App</h1>
      <input
        type="text"
        value={word}
        onChange={(e) => setWord(e.target.value)}
        placeholder="Enter a word"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default connect(null, { searchWord })(HomePage);
