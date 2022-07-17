import { ShopAction, ShopActionTypes, ShopState } from "../types/shop"

const initialState: ShopState = {
  shop: 'mc Donalds',
  shopActive: null,
  location: {
    lat: 50.4448262,
    lng: 30.5449968
  }
}

export const shopReducer = (state = initialState, action: ShopAction): ShopState => {
  switch (action.type) {
    case ShopActionTypes.SET_SHOP:
      return {
        ...state,
        shop: action.payload.shop,
        location: action.payload.location
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