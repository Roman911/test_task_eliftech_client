import { ShopAction, ShopActionTypes } from '../types/shop'

export const setShop = (payload: string): ShopAction => {
  return { type: ShopActionTypes.SET_SHOP, payload }
}

export const isShop = (payload: boolean): ShopAction => {
  return { type: ShopActionTypes.IS_SHOP, payload }
}