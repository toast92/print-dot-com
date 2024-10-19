<script setup lang="ts">
import { Poster, Flyer, BusinessCard } from '../types/productTypes';
import { ref } from 'vue';
import { useProductStore } from '../store/product';

const productStore = useProductStore();
const addToShoppingCart = (product) => {
  productStore.shoppingCart.push(product);
}
const selectedValues = ref({});
defineProps<{
  productData: Poster | Flyer | BusinessCard;
}>();
</script>

<template>
  <div>
    <v-form v-if="productData">
      <v-select
        v-for="(property) in productData.properties"
        :label="property.title"
        :items="property.options"
        item-title="name"
        item-value="name"
        :key="`${productData.type}-${property.slug}`"
        v-model="selectedValues[property.slug]"
      ></v-select>
      <v-btn class="mt-2" @click="addToShoppingCart(selectedValues)" block>Submit</v-btn>
    </v-form>
    <div>
      <h3>Selected Values:</h3>
      <pre>{{ selectedValues }}</pre>
    </div>
  </div>
</template>

<style scoped></style>
