import React from 'react';
import ProductListItem from '../product/product_list_item';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleQuery = this.handleQuery.bind(this)
  }


  handleSearchQuery(e) {
    // must hide intro
    const intro =document.getElementsByClassName("intro-span");

    // Array.prototype.forEach.call(intro, (el) => {
    //   el.classList.add("fade");
  }


  handleQuery(query) {

    this.setState({ query: query });
    // this.props.requestQueryProducts(this.state.query);
    // console.log('query', query);
  }

  showAllElements() {

  }

  render() {
    // console.log('search props', this.props);
    // console.log('search state', this.state);
    return (
      <div>
        <input type="text"
               className="search-bar"
               ref={input => this.textInput = input}
               onChange={() => {this.handleQuery(this.textInput.value)}}
               onKeyPress={this.handleSearchQuery.bind(this)}
               onBlur={this.showAllElements.bind(this)}
               placeholder="Discover your next favorite thing..."></input>
      </div>
    );
  }
}

export default Search;
