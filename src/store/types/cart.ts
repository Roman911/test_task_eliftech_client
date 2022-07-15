import type { IProduct } from '../../typesScript/product'

export interface CartState {
  products: {
    product: IProduct,
    sum: number
  }[] | []
}

export enum CartActionTypes {
  ADD_PRODUCT = 'CART:ADD_PRODUCT',
  REMOVE_PRODUCT = 'CART:REMOVE_PRODUCT',
  ADD_SUM = 'CART:ADD_SUM',
  DEC_SUM = 'CART:DEC_SUM'
}

interface AddProductAction { type: CartActionTypes.ADD_PRODUCT, payload: IProduct }
interface RemoveProduct { type: CartActionTypes.REMOVE_PRODUCT, payload: string }
interface AddSum { type: CartActionTypes.ADD_SUM, payload: string }
interface DecSum { type: CartActionTypes.DEC_SUM, payload: string }

export type CartAction = AddProductAction | RemoveProduct | AddSum | DecSum