import type { ItemPropsValue } from "@/components/ProductSelector.vue";
import { defineStore } from "pinia";

export type ShoppingCartProduct = {
  productType: string;
  properties: Record<string, ItemPropsValue>;
};

export const useShoppingCartStore = defineStore("shoppingCart", {
  state: () => ({
    products: [] as ShoppingCartProduct[],
  }),
  actions: {
    addProduct(product: ShoppingCartProduct) {
      this.products.push(product);
    },
    removeProduct(index: number) {
      return this.products.splice(index, 1);
    },
  },
});
