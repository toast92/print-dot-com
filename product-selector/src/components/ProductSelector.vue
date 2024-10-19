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
    properties: selectedValues.value,
  }
}
</script>

<template>
  <div>
    <v-form v-if="productData">
      <v-select
        v-for="(property) in productData.properties"
        :label="property.title"
        :items="property.options"
        item-title="name"
        item-value="slug"
        :key="property.slug"
        v-model="selectedValues[property.slug]"
      ></v-select>

      <v-btn class="mt-2" @click="shoppingCartStore.addProduct(constructProduct())" block>Submit</v-btn>
    </v-form>

    <div>
      <h3>Selected Values:</h3>
    </div>
  </div>
</template>

<style scoped></style>
