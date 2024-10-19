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

const handleSubmit = () => {
  const newProduct = constructProduct();
  shoppingCartStore.addProduct(newProduct);
  selectedValues.value = {};
}
</script>

<template>
  <div>
    <v-form v-if="productData">
      <v-select
        v-for="(property) in productData.properties"
        :label="property.title"
        :items="property.options"
        :key="property.slug"
        :item-props="itemProps"
        v-model="selectedValues[property.slug]"
      >
    </v-select>
      <v-btn class="mt-2" @click="handleSubmit">Submit</v-btn>
    </v-form>

    <div>
      <h3>Selected Values:</h3>
    </div>
  </div>
</template>

<style scoped></style>
