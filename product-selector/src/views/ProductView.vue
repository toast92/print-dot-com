<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRoute, onBeforeRouteUpdate } from "vue-router";
import ProductSelector from "@/components/ProductSelector.vue";

const route = useRoute();
const productType = ref(null);
const jsonData = ref(null);
const loading = ref(true);

const loadJsonData = async type => {
  loading.value = true;
  try {
    const jsonFile = await import(`../data/${type}.json`);
    jsonData.value = jsonFile.default;
  } catch (error) {
    console.error("Error loading the JSON file:", error);
    jsonData.value = { error: "Failed to load data" };
  } finally {
    loading.value = false;
  }
};

onMounted(() => {
  productType.value = route.params.type;
  loadJsonData(productType.value);
});

onBeforeRouteUpdate(to => {
  productType.value = to.params.type;
  loadJsonData(productType.value);
});
</script>

<template>
  <v-skeleton-loader
    v-if="loading"
    type="card"
    class="mx-auto my-10"
    height="400"
    width="600"
  />
  <div v-else>
    <div v-if="jsonData && !jsonData.error">
      <h2 class="d-flex justify-center py-10">{{ jsonData.title }}</h2>
      <product-selector :productData="jsonData"></product-selector>
    </div>

    <v-alert
      v-else
      class="mt-5"
      border="top"
      type="warning"
      variant="outlined"
      prominent
    >
      There is no
      <span class="font-weight-bold">{{ route.params.type }}</span> product
      type. Use the menu to navigate to a different product.
    </v-alert>
  </div>
</template>
