<template>
  <section class="bg-gradient-to-br from-white to-gray-100 p-8 rounded-2xl shadow-xl">
    <h2 class="text-3xl font-bold text-center mb-8 text-gray-800">What People Say</h2>
    <div class="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2">
      <div
        v-for="testimonial in testimonials"
        :key="testimonial.name"
        class="min-w-[300px] md:min-w-[350px] bg-white p-6 rounded-xl shadow-md snap-center transform transition hover:scale-105"
      >
        <p class="text-gray-600 italic mb-4">"{{ testimonial.quote }}"</p>
        <div class="border-t pt-4 mt-4">
          <p class="font-semibold text-gray-800">{{ testimonial.name }}</p>
          <p class="text-sm text-gray-500">{{ testimonial.role }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { usePortfolioStore } from '../stores/portfolio';

const store = usePortfolioStore();
const { testimonials } = store;
</script>
