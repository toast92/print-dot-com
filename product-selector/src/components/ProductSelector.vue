<script setup lang="ts">
import type { Poster, Flyer, BusinessCard, PosterOption, FlyerOption, BusinessCardOption, CustomSize } from "../types/productTypes";
import { ref } from "vue";
import { useShoppingCartStore } from "../store/shoppingCart";

const props = defineProps<{
  productData: Poster | Flyer | BusinessCard;
}>();

const selectedValues = ref<Record<string, string | number | null>>({});
const snackbar = ref(false);
const shoppingCartStore = useShoppingCartStore();

const constructProduct = () => {
  return {
    productType: props.productData.sku,
    properties: { ...selectedValues.value },
  };
};

interface ItemProps {
  title: string,
  value: string
}

interface Item {
  slug: string | number,
  name?: string,
  type?: string
}

const itemProps = (item: Item): ItemProps => {
  return {
    title: getItemTitle(item),
    value: getItemSlug(item),
  };
};

const getItemTitle = (item: Item): string => {
  const base = item?.name || String(item.slug);
  const type = item?.type || null;
  return type ? `${base}-${type}` : base;
};

const getItemSlug = (item: Item): string=> {
  const base = String(item.slug);
  const type = item?.type || null;
  return type ? `${base}-${type}` : base;
};

const getCustomSizeOptions = (options: PosterOption[] | FlyerOption[] | BusinessCardOption[]): CustomSize | undefined=> {
  const customOption: PosterOption | FlyerOption | BusinessCardOption | undefined = options.find(option => option.slug === "custom");
  return customOption !== undefined ? customOption.customSizes : undefined;
};


const getHeightRules = (customSizes: any) => [
  (inputValue: number) => !!inputValue || "Height is required",
  (inputValue: number) =>
    inputValue >= customSizes.minHeight ||
    `Height must be at least ${customSizes.minHeight} mm`,
    (inputValue: number) =>
    inputValue <= customSizes.maxHeight ||
    `Height must be less than ${customSizes.maxHeight} mm`,
];

const getWidthRules = (customSizes: any) => [
(inputValue: number) => !!inputValue || "Width is required",
(inputValue: number) =>
    inputValue >= customSizes.minWidth ||
    `Width must be at least ${customSizes.minWidth} mm`,
    (inputValue: number) =>
    inputValue <= customSizes.maxWidth ||
    `Width must be less than ${customSizes.maxWidth} mm`,
];

const handleSubmit = () => {
  const newProduct = constructProduct();
  shoppingCartStore.addProduct(newProduct);
  snackbar.value = true;
  selectedValues.value = {};
};

const closeSnackbar = () => {
  snackbar.value = false;
};
</script>

<template>
  <div class="d-flex justify-center">
    <v-form v-if="productData" class="v-col-5 m-auto">
      <template v-for="property in productData.properties" :key="property.slug">
        <v-select
          variant="outlined"
          :label="property.title"
          :items="property.options"
          :item-props="itemProps"
          v-model="selectedValues[property.slug]"
        />

        <div v-if="selectedValues[property.slug] === 'custom'" class="d-flex">
          <v-text-field
            variant="outlined"
            class="pr-5 pl-0 v-col-6"
            v-model="selectedValues[property.slug + '_customHeight']"
            label="Height(mm)"
            :rules="getHeightRules(getCustomSizeOptions(property.options))"
            clearable
          ></v-text-field>

          <v-text-field
            variant="outlined"
            class="v-col-6"
            v-model="selectedValues[property.slug + '_customWidth']"
            label="Width(mm)"
            :rules="getWidthRules(getCustomSizeOptions(property.options))"
            clearable
          ></v-text-field>
        </div>
      </template>

      <div class="d-flex justify-end">
        <v-btn
          size="large"
          flat
          color="action"
          class="mt-2"
          @click="handleSubmit"
          >Add item</v-btn
        >
      </div>
    </v-form>
    <v-snackbar v-model="snackbar" color="lightgreen" timeout="2000">
      Your product has been added to the shopping cart

      <template v-slot:actions>
        <v-btn
          color="black"
          variant="text"
          icon="mdi-close"
          @click="closeSnackbar"
        >
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<style scoped></style>
