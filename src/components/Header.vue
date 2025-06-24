<template>
  <header class="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-4 sticky top-0 z-20 shadow-lg">
    <nav class="container mx-auto px-6 flex justify-between items-center">
      <!-- Logo/Brand -->
      <div class="flex items-center">
        <h1 class="text-2xl font-bold tracking-tight transition-colors duration-300 hover:text-blue-200">
          <RouterLink to="/">Kartrork's Portfolio</RouterLink>
        </h1>
      </div>

      <!-- Navigation Links -->
      <ul class="hidden md:flex items-center space-x-8">
        <li>
          <RouterLink 
            to="/" 
            class="text-base font-medium text-gray-200 hover:text-white hover:scale-105 transition-all duration-200 ease-in-out"
            active-class="text-white border-b-2 border-blue-300"
          >
            Home
          </RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/about" 
            class="text-base font-medium text-gray-200 hover:text-white hover:scale-105 transition-all duration-200 ease-in-out"
            active-class="text-white border-b-2 border-blue-300"
          >
            About
          </RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/portfolio" 
            class="text-base font-medium text-gray-200 hover:text-white hover:scale-105 transition-all duration-200 ease-in-out"
            active-class="text-white border-b-2 border-blue-300"
          >
            Portfolio
          </RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/services" 
            class="text-base font-medium text-gray-200 hover:text-white hover:scale-105 transition-all duration-200 ease-in-out"
            active-class="text-white border-b-2 border-blue-300"
          >
            Services
          </RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/testimonials" 
            class="text-base font-medium text-gray-200 hover:text-white hover:scale-105 transition-all duration-200 ease-in-out"
            active-class="text-white border-b-2 border-blue-300"
          >
            Testimonials
          </RouterLink>
        </li>
        <li>
          <RouterLink 
            to="/contact" 
            class="text-base font-semibold text-white bg-blue-500 px-4 py-2 rounded-md hover:bg-blue-600 hover:scale-105 transition-all duration-200 ease-in-out"
            active-class="bg-blue-600"
          >
            Contact
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<style scoped>
/* Slide transition for mobile menu */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateY(-100%);
}
.slide-enter-to,
.slide-leave-from {
  transform: translateY(0);
}
</style>