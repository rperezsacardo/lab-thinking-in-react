import React, { Component } from 'react';

import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      stock: true,
    };
  }

  updateSearchQuery = (event) => {
    const { name, value } = event.target;
    console.log(value);
    this.setState({
      searchQuery: value,
    });
  };
  render() {
    const products = this.props.products.data.filter((product) => {
      return product.name
        .toLowerCase()
        .includes(this.state.searchQuery.toLowerCase());
    });
    return (
      <div className="App">
        <SearchBar
          handleInputChange={this.updateSearchQuery}
          searchQuery={this.state.searchQuery}
        />
        <ProductTable
          products={products}
          searchQuery={this.state.searchQuery}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
