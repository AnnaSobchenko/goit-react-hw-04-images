import { useState } from 'react';

const Searchbar = ({ changeSearch }) => {
  const [input, setInput] = useState('');

  const handleChange = e => {
    setInput(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    changeSearch(input);
  };

  return (
    <header className="Searchbar">
      <form className="SearchForm" onSubmit={handleSubmit}>
        <input
          className="SearchFormInput"
          type="text"
          value={input}
          placeholder="Search images and photos"
          onChange={handleChange}
        />
        <button type="submit" className="SearchFormButton">
          <span className="SearchFormButtonLabel">&#x1f50d;</span>
        </button>
      </form>
    </header>
  );
};

export default Searchbar;
