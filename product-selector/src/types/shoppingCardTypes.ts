import type { CustomSizes } from "@/types/productDataTypes";

export type ShoppingCartItem = {
  productType: string;
  properties: Record<string, ShoppingCartItemProperty>;
};

export interface ShoppingCartItemProperty {
  slug: string;
  title: string;
  customSizes?: CustomSizes;
}
