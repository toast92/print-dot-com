<script setup lang="ts">
import { Poster, Flyer, BusinessCard } from '../types/productTypes';
import { ref } from 'vue';
import { useShoppingCartStore } from '../store/shoppingCart';

const props = defineProps<{
  productData: Poster | Flyer | BusinessCard;
}>();

const selectedValues = ref({});
const shoppingCartStore = useShoppingCartStore();

const constructProduct = () => {
  return {
    productType: props.productData.sku,
    properties: { ...selectedValues.value },
  };
};

const itemProps = item => {
  return {
    title: getItemTitle(item),
    value: getItemSlug(item),
  };
};

const getItemTitle: string = item => {
  const base = item?.name || item.slug;
  const type = item?.type || null;
  return type ? `${base}-${type}` : base;
};

const getItemSlug: string = item => {
  const base = item.slug;
  const type = item?.type || null;
  return type ? `${base}-${type}` : base;
};

const getCustomSizeOptions = options => {
  const customOption = options.find(option => option.slug === 'custom');

  if (customOption !== undefined) {
    return customOption.customSizes;
  }
};

const getHeightRules = customSizes => [
  v => !!v || 'Height is required',
  v =>
    v >= customSizes.minHeight ||
    `Height must be at least ${customSizes.minHeight} mm`,
  v =>
    v <= customSizes.maxHeight ||
    `Height must be less than ${customSizes.maxHeight} mm`,
];

const getWidthRules = customSizes => [
  v => !!v || 'Width is required',
  v =>
    v >= customSizes.minWidth ||
    `Width must be at least ${customSizes.minWidth} mm`,
  v =>
    v <= customSizes.maxWidth ||
    `Width must be less than ${customSizes.maxWidth} mm`,
];

const handleSubmit = () => {
  const newProduct = constructProduct();
  shoppingCartStore.addProduct(newProduct);
  selectedValues.value = {};
};
</script>

<template>
  <div class="d-flex justify-center">
    <v-form v-if="productData" class="v-col-5 m-auto">
      <template v-for="property in productData.properties" :key="property.slug">
        <v-select
          :label="property.title"
          :items="property.options"
          :item-props="itemProps"
          v-model="selectedValues[property.slug]"
        />

        <div v-if="selectedValues[property.slug] === 'custom'" class="d-flex">
          <v-text-field
            class="pr-5 pl-0 v-col-6"
            v-model="selectedValues[property.slug + '_customHeight']"
            label="Height(mm)"
            :rules="getHeightRules(getCustomSizeOptions(property.options))"
            clearable
          ></v-text-field>

          <v-text-field
            class="v-col-6"
            v-model="selectedValues[property.slug + '_customWidth']"
            label="Width(mm)"
            :rules="getWidthRules(getCustomSizeOptions(property.options))"
            clearable
          ></v-text-field>
        </div>
      </template>

      <v-btn class="mt-2" @click="handleSubmit">Add item</v-btn>
    </v-form>
  </div>
</template>

<style scoped></style>
