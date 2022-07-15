import React from "react"
import { useLazyQuery } from '@apollo/client'
import type { IProduct } from '../../../typesScript/product'
import { useActions, useTypedSelector } from '../../../hooks'
import { PRODUCTS } from './queries'
import { ProductsComponent } from '../Components'

const arr = ['1', '2', '3', '4', '5', '6', '7', '8']

const Products: React.FC = () => {
  const { shop } = useTypedSelector(state => state.shop)
  const { addProduct } = useActions()
  const [loadShops, { loading, error, data }] = useLazyQuery(
    PRODUCTS,
    { variables: { shop } }
  )

  React.useEffect(() => {
    loadShops()
  }, [shop])

  const handleClick = (product: IProduct) => {
    addProduct(product)
  }

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return <>
    {data && <ProductsComponent products={data.products} handleClick={handleClick} />}
  </>
}

export default Products