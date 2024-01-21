import { Component } from 'react';

import style from './searchbar.module.css';

class Searchbar extends Component {
  state = {
    search: '',
  };

  //для запису значення з форми
  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  // для відправки форми
  handleSubmit = e => {
    e.preventDefault();
    // можливо не потрібно розпилення
    this.props.onSubmit({ ...this.state });
    this.setState({ search: '' });
  };

  render() {
    const { handleChange, handleSubmit } = this;
    const { search } = this.state;
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
  }
}

export default Searchbar;
