export interface ShopState {
  shop: string
  shopActive: null | string
  location: {
    lat: number
    lng: number
  }
}

export enum ShopActionTypes {
  SET_SHOP = 'SHOP:SET_SHOP',
  SHOP_ACTIVE = 'SHOP:SHOP_ACTIVE',
  SHOP_DEACTIVE = 'SHOP:SHOP_DEACTIVE'
}

interface SetShopAction {
  type: ShopActionTypes.SET_SHOP, payload: {
    shop: string, location: {
      lat: number
      lng: number
    }
  }
}

interface ShopActiveAction { type: ShopActionTypes.SHOP_ACTIVE, payload: string }

interface ShopDeactiveAction { type: ShopActionTypes.SHOP_DEACTIVE }

export type ShopAction = SetShopAction | ShopActiveAction | ShopDeactiveAction