import type { IProduct } from '../../typesScript/product'
import { CartAction, CartActionTypes } from '../types/cart'
import { AppDispatch } from '../store'
import { shopActive } from './shop'

export const addProduct = (payload: IProduct): CartAction => {
  return { type: CartActionTypes.ADD_PRODUCT, payload }
}

export const addFirstProduct = (payload: IProduct) => (dispatch: AppDispatch) => {
  dispatch(shopActive(payload.shop))
  dispatch(addProduct(payload))
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