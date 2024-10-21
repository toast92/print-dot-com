<script setup lang="ts">
import { onBeforeRouteUpdate } from "vue-router";
import type {
  ItemProps,
  VuetifyRules,
  VuetifyRulesObject,
} from "@/types/vuetifyTypes";
import type {
  ProductData,
  CustomSizes,
  ProductDataOption,
} from "@/types/productDataTypes";
import type {
  ShoppingCartItem,
  ShoppingCartItemProperty,
} from "@/types/shoppingCardTypes";
import { useShoppingCartStore } from "@/store/shoppingCart";
import { ref, useTemplateRef } from "vue";

const props = defineProps<{
  productData: ProductData;
}>();

const selectedValues = ref<Record<string, ShoppingCartItemProperty>>({});
const snackbar = ref(false);
const isFormValid = ref(false);
const form = useTemplateRef("form");
const shoppingCartStore = useShoppingCartStore();

const constructProduct = (): ShoppingCartItem => {
  return {
    productType: props.productData.sku,
    properties: { ...selectedValues.value },
  };
};

const itemProps = (item: ProductDataOption): ItemProps => {
  const title = getItemTitle(item);

  return {
    title: title,
    value: {
      slug: getItemSlug(item),
      title: title,
      customSizes: item.customSizes,
    },
  };
};

const getItemTitle = (item: ProductDataOption): string => {
  const base = item?.name || String(item.slug);
  const type = item?.type || null;
  return type ? `${base}-${type}` : base;
};

const getItemSlug = (item: ProductDataOption): string => {
  const base = String(item.slug);
  const type = item?.type || null;
  return type ? `${base}-${type}` : base;
};

const getHeightRules = (customSizes: CustomSizes): VuetifyRules => [
  (inputValue: number) => !!inputValue || "Height is required",
  (inputValue: number) =>
    inputValue >= customSizes.minHeight ||
    `Height must be at least ${customSizes.minHeight} mm`,
  (inputValue: number) =>
    inputValue <= customSizes.maxHeight ||
    `Height must be less than ${customSizes.maxHeight} mm`,
];

const getWidthRules = (customSizes: CustomSizes): VuetifyRules => [
  (inputValue: number) => !!inputValue || "Width is required",
  (inputValue: number) =>
    inputValue >= customSizes.minWidth ||
    `Width must be at least ${customSizes.minWidth} mm`,
  (inputValue: number) =>
    inputValue <= customSizes.maxWidth ||
    `Width must be less than ${customSizes.maxWidth} mm`,
];

const validationRules: VuetifyRulesObject = {
  size: [(value: string | number) => !!value || "Size is required"],
  material: [(value: string | number) => !!value || "Material is required"],
};

const handleSubmit = () => {
  form.value?.validate().then(({ valid: isFormValid }) => {
    if (isFormValid) {
      const newProduct = constructProduct();
      shoppingCartStore.addProduct(newProduct);
      snackbar.value = true;
      form.value?.reset();
      selectedValues.value = {};
    }
  });
};

const closeSnackbar = () => {
  snackbar.value = false;
};

onBeforeRouteUpdate(() => {
  form.value?.reset();
});
</script>

<template>
  <div class="d-flex justify-center">
    <v-form
      v-if="productData"
      class="v-col-5 m-auto"
      v-model="isFormValid"
      ref="form"
    >
      <template v-for="property in productData.properties" :key="property.slug">
        <v-select
          variant="outlined"
          v-model="selectedValues[property.slug]"
          :label="property.title"
          :items="property.options"
          :item-props="itemProps"
          :rules="validationRules[property.slug] || []"
        />

        <div
          v-if="selectedValues[property.slug]?.slug === 'custom'"
          class="d-flex"
        >
          <v-text-field
            variant="outlined"
            class="pr-5 pl-0 v-col-6"
            v-model="selectedValues[property.slug + '_customHeight']"
            label="Height(mm)"
            :rules="
              getHeightRules(
                selectedValues[property.slug].customSizes as CustomSizes,
              )
            "
            clearable
          ></v-text-field>

          <v-text-field
            variant="outlined"
            class="v-col-6"
            v-model="selectedValues[property.slug + '_customWidth']"
            label="Width(mm)"
            :rules="
              getWidthRules(
                selectedValues[property.slug].customSizes as CustomSizes,
              )
            "
            clearable
          ></v-text-field>
        </div>
      </template>

      <div class="d-flex justify-end">
        <v-btn
          size="large"
          flat
          color="action"
          class="mt-2"
          @click="handleSubmit"
          :disabled="!isFormValid"
          >Add item</v-btn
        >
      </div>
    </v-form>
    <v-snackbar v-model="snackbar" color="lightgreen" timeout="2000">
      Your product has been added to the shopping cart

      <template v-slot:actions>
        <v-btn
          color="black"
          variant="text"
          icon="mdi-close"
          @click="closeSnackbar"
        >
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>
