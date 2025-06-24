<template>
  <div class="bg-gray-100 min-h-screen">
    <Header />
    <main class="container mx-auto py-8">
      <RouterView />
    </main>
    <Footer />
  </div>
</template>

<script setup>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
</script>