export interface Product {
  sku: string;
  title: string;
  properties: Property[];
  excludes?: ExcludeRule[];
}

export interface Property {
  slug: string;
  title: string;
  options: Option[];
}

export interface Option {
  slug: string | number;
  name: string;
  width?: number;
  height?: number;
  type?: string;
  customSizes?: CustomSize;
}

export interface CustomSize {
  minWidth: number;
  maxWidth: number;
  minHeight: number;
  maxHeight: number;
}

export interface ExcludeRule {
  options: string[];
  property: string;
}
