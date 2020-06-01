import React from 'react';

const ProductRow = (props) => {
  const singleProduct = props;
  console.log(singleProduct);
  return (
    <tr>
      <th>{props.name}</th>
      <th>{props.price}</th>
    </tr>
  );
};

export default ProductRow;
