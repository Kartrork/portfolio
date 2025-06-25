<template>
  <section class="relative py-16 bg-gradient-to-br from-blue-50 to-gray-100 rounded-lg shadow-xl overflow-hidden">
    <!-- Background Accent -->
    <div class="absolute inset-0 bg-pattern opacity-10"></div>

    <div class="container mx-auto px-6 text-center relative z-10">
      <!-- Heading -->
      <h2 class="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight animate-fade-in">
        Hi, I'm Kartrork
      </h2>
      <h3 class="text-xl md:text-2xl font-semibold text-blue-700 mb-6">
        Crafting Innovative Web Experiences from Cambodia
      </h3>

      <!-- Introduction -->
      <p class="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto mb-8 leading-relaxed">
        I'm a passionate web developer with a flair for creating modern, responsive, and user-centric websites.
        Based in virtual, I blend creativity with technical expertise to build digital solutions that
        inspire and engage. Whether it's a sleek portfolio or a dynamic web app, I’m driven by a love for innovation
        and a commitment to delivering exceptional user experiences.
      </p>

      <!-- Skills Highlight -->
      <div class="flex flex-wrap justify-center gap-4 mb-8">
        <span
          class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition-colors duration-200">
          JavaScript & Vue.js
        </span>
        <span
          class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition-colors duration-200">
          Responsive Design
        </span>
        <span
          class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition-colors duration-200">
          UI/UX Optimization
        </span>
        <span
          class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 transition-colors duration-200">
          Tailwind CSS
        </span>
      </div>

      <!-- Call to Action -->
      <div class="flex justify-center gap-4">
        <RouterLink to="/portfolio"
          class="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 hover:scale-105 transition-all duration-200 ease-in-out shadow-md">
          Explore My Work
        </RouterLink>
        <RouterLink to="/contact"
          class="bg-transparent border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-all duration-200 ease-in-out shadow-md">
          Get in Touch
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Background pattern for subtle texture */
.bg-pattern {
  background-image: url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%239CA3AF' fill-opacity='0.4'%3E%3Cpath d='M0 0h4v4H0zm0 8h4v4H0zm0 8h4v4H0zm8 0h4v4H8zm8 0h4v4H16zm8 0h4v4H24zm8 0h4v4H32zm-32 8h4v4H0zm8 0h4v4H8zm8 0h4v4H16zm8 0h4v4H24zm8 0h4v4H32zm-32 8h4v4H0zm8 0h4v4H8zm8 0h4v4H16zm8 0h4v4H24z'/%3E%3C/g%3E%3C/svg%3E");
}

/* Fade-in animation for heading */
.animate-fade-in {
  animation: fadeIn 1s ease-in-out;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(20px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>