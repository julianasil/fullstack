import React from 'react';
import Table from './Table';

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
          <Table.Row>
            <Table.ColumnHeader>Basball</Table.ColumnHeader>
            <Table.ColumnHeader>5</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.ColumnHeader>Shuttlecock</Table.ColumnHeader>
            <Table.ColumnHeader>5</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.ColumnHeader>Tennisball</Table.ColumnHeader>
            <Table.ColumnHeader>5</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.ColumnHeader>Electronic Goods</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.ColumnHeader>Electricball</Table.ColumnHeader>
            <Table.ColumnHeader>5</Table.ColumnHeader>
          </Table.Row>
          <Table.Row>
            <Table.ColumnHeader>Electronicball</Table.ColumnHeader>
            <Table.ColumnHeader>5</Table.ColumnHeader>
          </Table.Row>
        </Table.TBody>

        </Table.TableContainer>
    </div>
  );
}

export default ProductTable;
