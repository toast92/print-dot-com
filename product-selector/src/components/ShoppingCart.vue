<script setup lang="ts">
import { useShoppingCartStore } from "../store/shoppingCart";

const shoppingCartStore = useShoppingCartStore();
</script>

<template>
  <v-menu>
    <template v-slot:activator="{ props }">
      <v-btn v-bind="props" stacked>
        <v-badge color="action" :content="shoppingCartStore.products.length">
          <v-icon>mdi-cart-outline</v-icon>
        </v-badge>
      </v-btn>
    </template>

    <v-list v-if="shoppingCartStore.products.length > 0">
      <v-list-item
        v-for="(product, index) in shoppingCartStore.products"
        :key="index"
        :title="product.productType"
      >
        <v-list-item-subtitle
          v-for="(property, index) in product.properties"
          :key="index"
          >{{ property.title }}</v-list-item-subtitle
        >

        <v-btn
          @click="shoppingCartStore.removeProduct(index)"
          class="text-none text-decoration-underline pa-0"
          variant="text"
          color="primary"
          >Remove</v-btn
        >
      </v-list-item>
    </v-list>

    <v-card v-else>
      <v-card-text>Your shopping cart is empty</v-card-text>
    </v-card>
  </v-menu>
</template>
