export interface ShopState {
  shop: string
}

export enum ShopActionTypes {
  SET_SHOP = 'SHOP:SET_SHOP'
}

interface SetShopAction { type: ShopActionTypes.SET_SHOP, payload: string }

export type ShopAction = SetShopAction