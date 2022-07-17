import React from "react"
import { useActions, useTypedSelector } from '../../../hooks'
import { MarketComponent } from '../Components'
import { marketsItem } from './config'

type Props = {
  shop: string
  location: {
    lat: number
    lng: number
  }
}

const Markets: React.FC = () => {
  const { setShop, shopDeactive } = useActions()
  const { cart: { products }, shop: { shopActive } } = useTypedSelector(state => state)

  React.useEffect(() => {
    if (products.length === 0) shopDeactive()
  }, [products])

  const handleClick = (props: Props) => {
    if (!shopActive) setShop(props)
  }

  return <>
    {marketsItem.map((i, index) => {
      return <MarketComponent
        key={index}
        item={i}
        handleClick={handleClick}
        isActive={shopActive && shopActive === i.shop}
      />
    })}
  </>
}

export default Markets