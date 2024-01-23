import { useState } from 'react';

import style from './searchbar.module.css';

const Searchbar = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = ({ target }) => {
    const { value } = target;
    setSearch(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ search });
    setSearch('');
  };

  return (
    <header className={style.searchbar}>
      <form onSubmit={handleSubmit} className={style.searchForm}>
        <button type="submit" className={style.searchFormButton}>
          <span className={style.searchFormButtonLabel}>Search</span>
        </button>

        <input
          name="search"
          value={search}
          onChange={handleChange}
          className={style.searchFormInput}
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          required
        />
      </form>
    </header>
  );
};

export default Searchbar;
