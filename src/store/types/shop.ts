export interface ShopState {
  shop: string
  isShop: boolean
}

export enum ShopActionTypes {
  SET_SHOP = 'SHOP:SET_SHOP',
  IS_SHOP = 'SHOP:IS_SHOP'
}

interface SetShopAction { type: ShopActionTypes.SET_SHOP, payload: string }

interface IsShopAction { type: ShopActionTypes.IS_SHOP, payload: boolean }

export type ShopAction = SetShopAction | IsShopAction