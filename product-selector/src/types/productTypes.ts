export interface Product {
  sku: string;
  title: string;
  properties: Property[];
  excludes?: ExcludeRules;
}

export interface Property {
  slug: string | number;
  title: string;
  options: Option[];
}

export interface Option {
  slug: string | number;
  name?: string;
  width?: number | string;
  height?: number | string;
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
  options: (string | number)[];
  property: string;
}

export type ExcludeRules = ExcludeRule[] | ExcludeRule[][];

// Business Cards
export interface BusinessCard extends Product {
  properties: BusinessCardProperty[];
}

export interface BusinessCardProperty extends Property {
  slug: string;
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
  slug: string;
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
  slug: string;
  options: PosterOption[];
}

export interface PosterOption extends Option {
  customSizes?: CustomSize;
}
