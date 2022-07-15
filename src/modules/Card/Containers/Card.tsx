import React from "react"
import { CardComponent } from '../Components'
import { IProduct } from '../../../typesScript/product'
import { useActions } from '../../../hooks'

type Props = {
  item: IProduct
}

const Card: React.FC<Props> = ({ item }) => {
  const [isActive, setActive] = React.useState(false)
  const { addFirstProduct, removeProduct } = useActions()

  const handleClick = () => {
    if (isActive) {
      removeProduct(item._id)
    } else {
      addFirstProduct(item)
    }
    setActive(prev => !prev)
  }

  return <CardComponent item={item} handleClick={handleClick} isActive={isActive} />
}

export default Card