import { Component } from 'react';

class Searchbar extends Component {
  state = { input: '' };

  handleChange=(e)=>{
    this.setState({input:e.target.value})
  }

  handleSubmit=e=>{
    e.preventDefault();
    this.props.changeSearch(this.state.input)
  }

  render() {
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.handleSubmit}>
          <input
            className="SearchFormInput"
            type="text"
            value={this.state.input}
            // autocomplete="off"
            // autofocus
            placeholder="Search images and photos"
            onChange={this.handleChange}
          />
          <button type="submit" className="SearchFormButton">
            <span className="SearchFormButtonLabel">&#x1f50d;</span>
          </button>
        </form>
      </header>
    );
  }
}

export default Searchbar;
