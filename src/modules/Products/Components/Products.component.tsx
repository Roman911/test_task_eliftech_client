import React from "react"
import { Grid } from '@mui/material'
import { ProductCard } from './ProductCard'
import type { IProduct } from '../../../typesScript/product'

type Props = {
  products: IProduct[]
}

const ProductsComponent: React.FC<Props> = ({ products }) => {
  return <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  {products.map(i => <ProductCard key={i._id} item={i} />)}
</Grid>
}

export default ProductsComponent