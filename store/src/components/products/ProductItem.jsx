import React from 'react'
import Table from '../Table';

const ProductItem = (props) => {
  return (
    <div>
      <Table.Row>
            <Table.Column>{props.name}</Table.Column>
            <Table.Column>${props.price.toFixed(2)}</Table.Column>
          </Table.Row>
    </div>
  )
}

export default ProductItem
