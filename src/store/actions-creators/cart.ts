import type { IProduct } from '../../typesScript/product'
import { useActions } from '../../hooks'

import { CartAction, CartActionTypes } from '../types/cart'

export const addProduct = (payload: IProduct): CartAction => {
  
  return { type: CartActionTypes.ADD_PRODUCT, payload }
}

export const removeProduct = (payload: string): CartAction => {
  return { type: CartActionTypes.REMOVE_PRODUCT, payload }
}

export const addSum = (payload: string): CartAction => {
  return { type: CartActionTypes.ADD_SUM, payload }
}

export const decSum = (payload: string): CartAction => {
  return { type: CartActionTypes.DEC_SUM, payload }
}