<script setup lang="ts">
import { Poster, Flyer, BusinessCard } from '@/types/products';
import { ref } from 'vue';
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
        item-value="slug"
        :key="`${productData.type}-${property.slug}`"
        v-model="selectedValues[property.slug]"
      ></v-select>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>
    <div>
      <h3>Selected Values:</h3>
      <pre>{{ selectedValues }}</pre>
    </div>
  </div>
</template>

<style scoped></style>
