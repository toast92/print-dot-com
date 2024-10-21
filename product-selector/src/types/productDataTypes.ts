export interface ProductData {
  sku: string;
  title: string;
  properties: ProductDataProperty[];
  excludes?: ExcludeRules;
}

interface ProductDataProperty {
  slug: string;
  title: string;
  options: ProductDataOption[];
}

export interface ProductDataOption {
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

interface ExcludeRule {
  options: (string | number)[];
  property: string;
}

type ExcludeRules = ExcludeRule[] | ExcludeRule[][];
