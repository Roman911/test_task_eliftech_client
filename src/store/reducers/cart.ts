import { ShopAction, ShopActionTypes, ShopState } from "../types/shop"

const initialState: ShopState = {
  shop: 'mc Donalds'
}

export const shopReducer = (state = initialState, action: ShopAction): ShopState => {
  switch (action.type) {
    case ShopActionTypes.SET_SHOP:
      return {
        ...state,
        shop: action.payload
      }
    default: return state
  }
}