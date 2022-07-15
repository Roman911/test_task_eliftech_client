import { ShopAction, ShopActionTypes, ShopState } from "../types/shop"

const initialState: ShopState = {
  shop: 'mc Donalds',
  isShop: false
}

export const shopReducer = (state = initialState, action: ShopAction): ShopState => {
  switch (action.type) {
    case ShopActionTypes.SET_SHOP:
      return {
        ...state,
        shop: action.payload
      }
    case ShopActionTypes.IS_SHOP:
      return {
        ...state,
        isShop: action.payload
      }
    default: return state
  }
}