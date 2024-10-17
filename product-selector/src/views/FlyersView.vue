<script setup lang="ts">
import flyersData from '../../../flyers.json';
import ProductSelector from '@/components/ProductSelector.vue';
</script>

<template>
  <main>
    <h2>Flyers</h2>
    <product-selector :productData="flyersData"></product-selector>
  </main>
</template>
