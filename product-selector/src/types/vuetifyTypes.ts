type ValidationRule = (value: string | number) => boolean | string;
type VuetifyRules = Array<string | boolean | ValidationRule>;
export type VuetifyRulesObject = {
  [key: string]: VuetifyRules;
};
