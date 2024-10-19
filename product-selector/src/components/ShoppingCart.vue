<script setup lang="ts">
import { useShoppingCartStore } from '../store/shoppingCart';

const shoppingCartStore = useShoppingCartStore();
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" stacked>
        <v-badge
          color="error"
          :content="shoppingCartStore.products.length"
        >
          <v-icon>mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list v-if="shoppingCartStore.products.length > 0">
      <v-list-item v-for="(product, index) in shoppingCartStore.products" :key="index">
        <v-list-item-title>{{ product }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <v-card v-else>
      <v-card-text>No products added</v-card-text>
    </v-card>
  </v-menu>

</template>

<style scoped></style>
