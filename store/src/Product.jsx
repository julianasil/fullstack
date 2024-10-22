import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Product = () => {
  const params = useParams();

  useEffect(() => {
    const fetchSingleProduct = async (id) => {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();

            console.log(data);
        }
        catch (error) {
            console.log(error);
        }
    }
    fetchSingleProduct(params.product_id);
  },
[])
    return(
        <div className="border p-4 flex gap-4"
            <div>
            </div>
    )
}

export default Product
