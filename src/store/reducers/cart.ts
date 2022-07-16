import { CartAction, CartActionTypes, CartState } from "../types/cart"

const initialState: CartState = {
  products: []
}

export const cartReducer = (state = initialState, action: CartAction): CartState => {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, { product: action.payload, sum: 1 }]
      }
    case CartActionTypes.REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.filter(i => i.product._id !== action.payload)
      }
    case CartActionTypes.ADD_SUM:
      return {
        ...state,
        products: state.products.map(i => i.product._id === action.payload ? { product: i.product, sum: i.sum + 1 } : i)
      }
    case CartActionTypes.DEC_SUM:
      return {
        ...state,
        products: state.products.map(i => i.product._id === action.payload ? { product: i.product, sum: i.sum - 1 } : i)
      }
    default: return state
  }
}