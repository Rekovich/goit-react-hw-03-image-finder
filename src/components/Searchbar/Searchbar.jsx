import { Component } from 'react';
import { Notify } from 'notiflix';
import css from './searchbar.module.css';
import PropTypes from 'prop-types'

class Searchbar extends Component {
state = {
  search: '',
}

handleChange = (e) => {
  this.setState({ search: e.target.value.toLowerCase() });
}

handleSubmit = (e) => {
  const { search } = this.state;
  e.preventDefault();


  if (search.trim() === '') {
    Notify.warning("Please write something before searching");
    return;
  }

  this.props.onSubmit(search);
  this.setState({ search: '' });
}

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleSubmit}>
          <button type="submit" className={css.SearchForm_button}>
            <span className={css.SearchForm_button_label}>Search</span>
          </button>

          <input
            className={css.SearchForm_input}
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}

export default Searchbar;
