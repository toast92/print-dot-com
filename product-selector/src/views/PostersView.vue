<script setup lang="ts">
import postersData from '@/data/posters.json';
import ProductSelector from '@/components/ProductSelector.vue';
</script>

<template>
  <div>
    <h2 class="d-flex justify-center py-10">{{ postersData.title }}</h2>
    <product-selector :productData="postersData"></product-selector>
  </div>
</template>
