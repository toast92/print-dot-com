<script setup lang="ts">
import businessCardsData from "@/data/businesscards.json";
import ProductSelector from "@/components/ProductSelector.vue";
</script>

<template>
  <div>
    <h2 class="d-flex justify-center py-10">{{ businessCardsData.title }}</h2>
    <product-selector :productData="businessCardsData"></product-selector>
  </div>
</template>
