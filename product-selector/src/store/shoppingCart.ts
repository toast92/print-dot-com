import { defineStore } from 'pinia';


type ShoppingCartProduct = {
  productType: string,
  properties: [],
}


export const useShoppingCartStore = defineStore('shoppingCart', {
  state: () => ({
        products: [] as ShoppingCartProduct[]
  }),
  actions: {
    addProduct(product: ShoppingCartProduct) {
      this.products.push(product);
    }
  }
})
