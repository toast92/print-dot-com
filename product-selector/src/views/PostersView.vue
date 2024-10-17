<script setup lang="ts">
import postersData from '@/data/posters.json';
import { ref } from 'vue';
const selectedValues = ref({});
const productProperties = postersData.properties;
</script>

<template>
  <h2>Posters</h2>
    <v-form>
      <v-select
        v-for="(property) in productProperties"
        :label="property.title"
        :items="property.options"
        item-title="name"
        item-value="slug"
        :key="property.slug"
        v-model="selectedValues[property.slug]"
      ></v-select>
      <v-btn class="mt-2" type="submit" block>Submit</v-btn>
    </v-form>

    <div>
      <h3>Selected Values:</h3>
      <pre>{{ selectedValues }}</pre>
    </div>

</template>
