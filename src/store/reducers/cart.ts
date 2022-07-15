import { CartAction, CartActionTypes, CartState } from "../types/cart"

const initialState: CartState = {
  products: []
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, {product: action.payload, sum: 1}]
      }
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(i => i.product._id !== action.payload)
      }
    default: return state
  }
}