import React from 'react';
import ProductListItem from '../product/product_list_item';

class Search extends React.Component {



  handleSearchQuery() {

  }

  render() {
    console.log('search props', this.props);
    return (
      <div>
        <input type="text"
               className="search-bar"
               onChange={this.handleSearchQuery.bind(this)}
               placeholder="Discover your next favorite thing..."></input>
      </div>
    );
  }
}

export default Search;
