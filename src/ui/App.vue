<template>
  <div>
    <div class="headers row">
      <p v-for="header in Object.keys(materials[0])">
        {{ header.toUpperCase() }}
      </p>
    </div>
    <div v-for="item in materials" class="row">
      <p>{{ item.id }}</p>
      <p>{{ item.name }}</p>
      <p>{{ item.type }}</p>
      <p>{{ item.onHand }}</p>
      <p>{{ item.consumptionUnit }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Material } from "./types";
import { ref } from "vue";
import useApi from "./composables/useApi";

const { searchMaterials } = useApi();
const materials = ref<Material[]>(searchMaterials());
const materialCount = ref<number>(materials.value.length);
</script>

<style scoped>
.headers {
  font-weight: 600;
}

.row {
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(v-bind(materialCount), 1fr);
}
</style>
