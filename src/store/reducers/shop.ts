import { ShopAction, ShopActionTypes, ShopState } from "../types/shop"

const initialState: ShopState = {
  shop: 'mc Donalds',
  shopActive: null
}

export const shopReducer = (state = initialState, action: ShopAction): ShopState => {
  switch (action.type) {
    case ShopActionTypes.SET_SHOP:
      return {
        ...state,
        shop: action.payload
      }
    case ShopActionTypes.SHOP_ACTIVE:
      return {
        ...state,
        shopActive: action.payload
      }
    case ShopActionTypes.SHOP_DEACTIVE:
      return {
        ...state,
        shopActive: null
      }
    default: return state
  }
}