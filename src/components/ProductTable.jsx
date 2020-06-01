import React from 'react';

import ProductRow from './ProductRow';

const ProductTable = (props) => {
  const products = props.products;
  const searchQuery = props.searchQuery;
  console.log(searchQuery);
  return (
    <table>
      <thead>
        <tr>
          <th>name </th>
          <th>price </th>
        </tr>
      </thead>
      <tbody>
        {products.map((product) => {
          return <ProductRow {...product} />;
        })}
      </tbody>
    </table>
  );
};

export default ProductTable;
