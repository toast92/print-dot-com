<script setup lang="ts">
import { Product } from '@/types/products.ts';
defineProps<{
  productData: Product;
}>();
</script>

<template>
  <div>
    <h1>Product selector</h1>
    <pre>{{ productData }}</pre>
  </div>
</template>

<style scoped></style>
