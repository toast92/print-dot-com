import type { ShoppingCartItemProperty } from "@/types/shoppingCardTypes";

// v-select
export interface ItemProps {
  title: string;
  value: ShoppingCartItemProperty;
}

// :rules
type ValidationRule = (value: number) => boolean | string;

export type VuetifyRules = Array<string | boolean | ValidationRule>;

export type VuetifyRulesObject = {
  [key: string]: VuetifyRules;
};
