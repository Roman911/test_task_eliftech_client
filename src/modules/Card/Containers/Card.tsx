import React from "react"
import { CardComponent } from '../Components'
import { IProduct } from '../../../typesScript/product'
import { useActions, useTypedSelector } from '../../../hooks'

type Props = {
  item: IProduct
  isCart?: boolean
  sum?: number
}

const Card: React.FC<Props> = ({ item, isCart, sum }) => {
  const [isActive, setActive] = React.useState(false)
  const { products } = useTypedSelector(state => state.cart)
  const { addFirstProduct, addSum, decSum, removeProduct } = useActions()

  React.useMemo(() => {
    if (products.find(i => i.product._id === item._id)) setActive(true)
  }, [item])

  const handleClick = React.useCallback(() => {
    if (isActive) {
      removeProduct(item._id)
    } else {
      addFirstProduct(item)
    }
    setActive(prev => !prev)
  }, [isActive])

  const handleClickInc = React.useCallback(() => {
    addSum(item._id)
  }, [])

  const handleClickDec = React.useCallback(() => {
    if (sum && sum > 1) {
      decSum(item._id)
    } else {
      removeProduct(item._id)
    }
  }, [sum])

  return <CardComponent
    item={item}
    handleClick={handleClick}
    handleClickInc={handleClickInc}
    handleClickDec={handleClickDec}
    isActive={isActive}
    isCart={isCart}
    sum={sum}
  />
}

export default Card