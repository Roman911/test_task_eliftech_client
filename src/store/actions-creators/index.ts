import * as CartActionCreators from './cart'
import * as ShopActionCreators from './shop'

export default {
  ...CartActionCreators,
  ...ShopActionCreators
}