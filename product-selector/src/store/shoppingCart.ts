import { defineStore } from "pinia";
import type { ShoppingCartItem } from "@/types/shoppingCardTypes";

export const useShoppingCartStore = defineStore("shoppingCart", {
  state: () => ({
    products: [] as ShoppingCartItem[],
  }),
  actions: {
    addProduct(product: ShoppingCartItem) {
      this.products.push(product);
    },
    removeProduct(index: number) {
      return this.products.splice(index, 1);
    },
  },
});
