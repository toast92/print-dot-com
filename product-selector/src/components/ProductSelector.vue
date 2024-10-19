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
  }
}

const itemProps = (item) => {
  return {
    title: getItemTitle(item),
    value: getItemSlug(item),
  }
}

const getItemTitle: string = (item) => {
  const base =  item?.name || item.slug;
  const typeName = item?.type || null;
  return typeName ? `${base}-${typeName}` : base;
}

//slugs were not unique in this case so I constructed unique ones.
const getItemSlug: string = (item) => {
  const base =  item.slug;
  const typeName = item?.type || null;
  return typeName ? `${base}-${typeName}` : base;
}

const getCustomSizeOptions = (options) => {
  const customOption = options.find(option => option.slug === 'custom');
  if(customOption !== undefined){
    return customOption.customSizes;
  }
}

const getHeightRules = (customSizes) => [
  (v) => !!v || 'Height is required',
  (v) => v >= customSizes.minHeight || `Height must be at least ${customSizes.minHeight} mm`,
  (v) => v <= customSizes.maxHeight || `Height must be less than ${customSizes.maxHeight} mm`
];

const getWidthRules = (customSizes) => [
  (v) => !!v || 'Width is required',
  (v) => v >= customSizes.minWidth || `Width must be at least ${customSizes.minWidth} mm`,
  (v) => v <= customSizes.maxWidth || `Width must be less than ${customSizes.maxWidth} mm`
];

const handleSubmit = () => {
  const newProduct = constructProduct();
  shoppingCartStore.addProduct(newProduct);
  selectedValues.value = {};
}
</script>

<template>
  <div>
    <v-form v-if="productData">
      <template v-for="property in productData.properties" :key="property.slug">
        <v-select
          :label="property.title"
          :items="property.options"
          :item-props="itemProps"
          v-model="selectedValues[property.slug]"
        />
        <template v-if="selectedValues[property.slug] === 'custom'">
          <p>{{ getCustomSizeOptions(property.options) }}</p>
          <v-text-field
            v-model="selectedValues[property.slug + '_customHeight']"
            label="Height(mm)"
            :rules="getHeightRules(getCustomSizeOptions(property.options))"
            clearable
          ></v-text-field>
          <v-text-field
            v-model="selectedValues[property.slug + '_customWidth']"
            label="Width(mm)"
            :rules="getWidthRules(getCustomSizeOptions(property.options))"
            clearable
          ></v-text-field>
        </template>
      </template>
      <v-btn class="mt-2" @click="handleSubmit">Submit</v-btn>
    </v-form>
  </div>
</template>

<style scoped></style>
