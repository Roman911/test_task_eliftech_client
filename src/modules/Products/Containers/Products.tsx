import React from "react"
import { useLazyQuery } from '@apollo/client'
import { useTypedSelector } from '../../../hooks'
import { PRODUCTS } from './queries'
import { ProductsComponent } from '../Components'

const Products: React.FC = () => {
  const { shop } = useTypedSelector(state => state.shop)
  const [loadShops, { loading, error, data }] = useLazyQuery(
    PRODUCTS,
    { variables: { shop } }
  )

  React.useEffect(() => {
    loadShops()
  }, [shop, loadShops])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error</p>

  return <>
    {data && <ProductsComponent products={data.products} />}
  </>
}

export default React.memo(Products)