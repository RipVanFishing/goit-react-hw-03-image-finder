import { Component } from "react";
import { toast } from "react-toastify";
import css from './SearchBar.module.css';

class SearchBar extends Component {
     
    state = {
        text: '',
    }

    handleSearch = (e) => {
        e.preventDefault();
        if (this.state.text.trim() === '') {
            return toast.info("Введите предмет поиска :D")
        }
        this.props.onSubmit(this.state.text)

        this.reset();

    }
    handleChange = (e) => {
        const { name, value } = e.currentTarget;
        this.setState({[name]:value})
    }
    reset = () => {
        this.setState({
            text: '',
        })
    }
    
    render() {
        return(
        <header className={css.searchbar}>
  <form onSubmit={this.handleSearch} className={css.searchForm}>
    <button type="submit" className={css.searchForm_button}>
      <span className={css.searchForm_button_label}>Search</span>
    </button>

    <input
    className={css.searchForm_input}
     value={this.state.text}
    onChange={this.handleChange}
    type="text"
    autoComplete="off"
 autoFocus
                        placeholder="Search images and photos"
                        name="text"
    />
  </form>
    </header>
        )
    }
}

export default SearchBar;