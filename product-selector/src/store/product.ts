import { defineStore } from 'pinia';
import { Poster, Flyer, BusinessCard } from "@/types/products";

type ShoppingCartProduct = Poster | Flyer | BusinessCard;

export const useProductStore = defineStore('product', {
  state: () => ({
        posters: [] as Poster[],
        flyers: [] as Flyer[],
        businessCards: [] as BusinessCard[],
        shoppingCart: [] as ShoppingCartProduct[]
  }),
})