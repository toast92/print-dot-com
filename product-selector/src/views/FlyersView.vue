<script setup lang="ts">
import flyersData from "@/data/flyers.json";
import ProductSelector from "@/components/ProductSelector.vue";
</script>

<template>
  <div>
    <h2 class="d-flex justify-center py-10">{{ flyersData.title }}</h2>
    <product-selector :productData="flyersData"></product-selector>
  </div>
</template>
