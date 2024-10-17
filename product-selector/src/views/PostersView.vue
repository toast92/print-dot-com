<script setup lang="ts">
import postersData from '../../../posters.json';
import ProductSelector from '@/components/ProductSelector.vue';
</script>

<template>
  <main>
    <h2>Posters</h2>
    <product-selector :productData="postersData"></product-selector>
  </main>
</template>
