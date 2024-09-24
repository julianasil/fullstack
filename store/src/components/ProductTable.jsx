import React from 'react';
import Table from './Table';
import ProductItem from './products/ProductItem';

const ProductTable = () => {
  return (
    <div>
      <Table.TableContainer>
        <Table.THead>
          <Table.Row>
            <Table.ColumnHeader>Name</Table.ColumnHeader>
            <Table.ColumnHeader>Price</Table.ColumnHeader>
          </Table.Row>
        </Table.THead>

        <Table.TBody>
          <Table.Row>
            <Table.ColumnHeader>Sporting Goods</Table.ColumnHeader>
          </Table.Row>
          <ProductItem name="Tennis" price={99.9} />
          <ProductItem name="Badminton" price={99.9} />
          <ProductItem name="Basketball" price={99.99} />
        </Table.TBody>

        </Table.TableContainer>
    </div>
  );
}

export default ProductTable;
