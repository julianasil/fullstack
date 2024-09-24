import React from 'react'
import Table from '../Table';

const ProductItem = (props) => {
  return (
    <div>
      <Table.Row>
            <Table.ColumnHeader>{props.name}</Table.ColumnHeader>
            <Table.ColumnHeader>${props.price.toFixed(2)}</Table.ColumnHeader>
          </Table.Row>
    </div>
  )
}

export default ProductItem
