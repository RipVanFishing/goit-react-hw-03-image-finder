import { Component } from "react";
import css from './SearchBar.module.css';

 class SearchBar extends Component {
    render() {
        return(
        <header className={css.searchbar}>
  <form className={css.searchForm}>
    <button type="submit" className={css.searchForm_button}>
      <span className={css.searchForm_button_label}>Search</span>
    </button>

    <input
      className={css.searchForm_input}
      type="text"
      autocomplete="off"
      autofocus
      placeholder="Search images and photos"
    />
  </form>
    </header>
        )
    }
}

export default SearchBar;