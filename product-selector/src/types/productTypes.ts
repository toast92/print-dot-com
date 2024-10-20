export interface Product {
  sku: string;
  title: string;
  properties: Property[];
  excludes?: ExcludeRules;
}

export interface Property {
  slug: string;
  title: string;
  options: TOption[];
}

export interface TOption {
  slug: string | number;
  name?: string;
  width?: number | string;
  height?: number | string;
  type?: string;
  customSizes?: CustomSizes;
}

export interface CustomSizes {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
}

export interface ExcludeRule {
  options: (string | number)[];
  property: string;
}

export type ExcludeRules = ExcludeRule[] | ExcludeRule[][];

export interface BusinessCard extends Product {
  properties: Property[];
}

export interface Flyer extends Product {
  properties: Property[];
}

export interface Poster extends Product {
  properties: Property[];
}

