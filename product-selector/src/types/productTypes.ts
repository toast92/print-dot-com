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

// Business Cards
export interface BusinessCard extends Product {
  properties: BusinessCardProperty[];
}

export interface BusinessCardProperty extends Property {
  slug:
    | "fold"
    | "size"
    | "printtype"
    | "material"
    | "spot_finish"
    | "rounded_corners"
    | "copies"
    | "clean_cut"
    | "printingmethod";
  options: BusinessCardOption[];
}

export interface BusinessCardOption extends Option {
  customSizes?: CustomSize;
}

// Flyers
export interface Flyer extends Product {
  properties: FlyerProperty[];
}

export interface FlyerProperty extends Property {
  slug:
    | "size"
    | "printtype"
    | "material"
    | "finish"
    | "copies"
    | "clean_cut"
    | "variable_creasing_line"
    | "perforation"
    | "die_cut"
    | "drillholes";
  options: FlyerOption[];
}

export interface FlyerOption extends Option {
  customSizes?: CustomSize;
}

// Posters
export interface Poster extends Product {
  properties: PosterProperty[];
}

export interface PosterProperty extends Property {
  slug:
    | "size"
    | "printtype"
    | "material"
    | "finish"
    | "copies"
    | "sheet_size"
    | "custom_shape"
    | "clean_cut"
    | "customer_packing_option";
  options: PosterOption[];
}

export interface PosterOption extends Option {
  customSizes?: CustomSize;
}
