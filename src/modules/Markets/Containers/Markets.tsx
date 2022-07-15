import React from "react"
import { useActions } from '../../../hooks'
import { MarketComponent } from '../Components'
import { marketsItem } from './config'

const Markets: React.FC = () => {
  const { setShop } = useActions()

  const handleClick = (shop: string) => {
    setShop(shop)
  }

  return <>
    { marketsItem.map((i, index) => <MarketComponent key={index} item={i} handleClick={handleClick} />) }
  </>
}

export default Markets