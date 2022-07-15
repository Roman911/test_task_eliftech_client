import { ShopAction, ShopActionTypes } from '../types/shop'

export const setShop = (payload: string): ShopAction => {
  return { type: ShopActionTypes.SET_SHOP, payload }
}

export const shopActive = (payload: string): ShopAction => {
  return { type: ShopActionTypes.SHOP_ACTIVE, payload }
}

export const shopDeactive = (): ShopAction => {
  return { type: ShopActionTypes.SHOP_DEACTIVE }
}