<script setup lang="ts">
import { RouterView } from 'vue-router';
import ShoppingCart from '@/components/ShoppingCart.vue';
</script>

<template>
  <v-app>
    <header>
      <v-app-bar color="primary">
        <v-btn variant="text" :to="{ name: 'posters' }">Posters</v-btn>
        <v-btn variant="text" :to="{ name: 'flyers' }">flyers</v-btn>
        <v-btn variant="text" :to="{ name: 'businesscards' }"
          >Business cards</v-btn
        >
        <v-spacer></v-spacer>
        <shopping-cart></shopping-cart>
      </v-app-bar>
    </header>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>
