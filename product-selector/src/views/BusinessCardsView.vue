<script setup lang="ts">
import businessCardsData from '../../../businesscards.json';
import ProductSelector from '@/components/ProductSelector.vue';
</script>

<template>
  <main>
    <h2>Business cards</h2>
    <product-selector :productData="businessCardsData"></product-selector>
  </main>
</template>
