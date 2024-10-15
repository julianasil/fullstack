import React from 'react'
import Button from './Button'

const ProductCard = ({ imageSrc, name }) => {
  return (
    <div>
      <img src={imageSrc}></img>
      <span className="font-bold text-base">{name}</span>
      <Button name="view" onClick={console.log(name)} />
    </div>
  )
}

export default ProductCard;
