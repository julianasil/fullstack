import React from 'react';
import Table from './Table';
import ProductItem from './products/ProductItem';
import ProductCategoryHeader from './ProductCategoryHeader';

const ProductTable = (headers, products) => {

  const sportingGoods = products.filter((product) => product.type === 1);
  const electronicGoods = products.filter((product) => product.type === 2);
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
          <ProductCategoryHeader text="Sporting Goods" />
          </Table.Row>
          <ProductItem name="Tennis" price={99.9} />
          <ProductItem name="Badminton" price={99.9} />
          <ProductItem name="Basketball" price={99.99} />
          <ProductCategoryHeader text="Electronic Goods" />
          <ProductItem name="Tennis Phone" price={99.9} />
          <ProductItem name="Badminton Laptop" price={99.9} />
          <ProductItem name="Basketball Computer" price={99.99} />
        </Table.TBody>
        </Table.TableContainer>
    </div>
  );
}

export default ProductTable;
