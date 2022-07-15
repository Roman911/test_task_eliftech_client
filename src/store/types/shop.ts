export interface ShopState {
  shop: string
  shopActive: null | string
}

export enum ShopActionTypes {
  SET_SHOP = 'SHOP:SET_SHOP',
  SHOP_ACTIVE = 'SHOP:SHOP_ACTIVE',
  SHOP_DEACTIVE = 'SHOP:SHOP_DEACTIVE'
}

interface SetShopAction { type: ShopActionTypes.SET_SHOP, payload: string }

interface ShopActiveAction { type: ShopActionTypes.SHOP_ACTIVE, payload: string }

interface ShopDeactiveAction { type: ShopActionTypes.SHOP_DEACTIVE }

export type ShopAction = SetShopAction | ShopActiveAction | ShopDeactiveAction