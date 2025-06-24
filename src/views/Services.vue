<template>
  <section class="bg-white p-6 rounded-lg shadow">
    <h2 class="text-2xl font-bold mb-4">Services</h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="service in services" :key="service.name" class="border rounded-lg p-4">
        <h3 class="text-lg font-semibold">{{ service.name }}</h3>
        <p>{{ service.description }}</p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../stores/portfolio';

const store = usePortfolioStore();
const { services } = store;
</script>