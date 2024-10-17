<script setup lang="ts">
import { RouterView } from 'vue-router';
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
        <v-menu>
          <template v-slot:activator="{ props }">
            <v-btn v-bind="props" icon="mdi-cart-outline"></v-btn>
          </template>

          <v-list>
            <v-list-item>
              <v-list-item-title>Item 1</v-list-item-title>
            </v-list-item>
            <v-list-item>
              <v-list-item-title>Item 2</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </header>
    <v-main>
      <RouterView />
    </v-main>
  </v-app>
</template>

<style scoped></style>
