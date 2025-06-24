<template>
  <section class="bg-gray-50 py-16 px-6">
    <div class="container mx-auto max-w-6xl">
      <!-- Heading -->
      <h2 class="text-4xl font-extrabold text-gray-900 mb-4 text-center tracking-tight animate-fade-in">
        My Portfolio
      </h2>
      <p class="text-xl text-gray-600 mb-10 text-center max-w-2xl mx-auto leading-relaxed">
        A showcase of my latest projects, blending creativity and technical expertise to deliver exceptional web
        experiences.
      </p>

      <!-- Category Filters -->
      <div class="flex justify-center flex-wrap gap-4 mb-12">
        <button v-for="category in categories" :key="category" @click="filterProjects(category)" :class="[
          'px-4 py-2 rounded-full text-sm font-medium shadow transition-all duration-200',
          selectedCategory === category ? 'bg-blue-600 text-white' : 'bg-blue-100 text-blue-800 hover:bg-blue-200'
        ]">
          {{ category }}
        </button>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="project in filteredProjects" :key="project.id"
          class="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300">
          <img :src="project.image" :alt="`${project.name} screenshot`" class="w-full h-48 object-cover rounded-t-xl" />
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.name }}</h3>
            <p class="text-gray-600 text-base mb-4 leading-relaxed">{{ project.description }}</p>
            <p class="text-sm text-gray-500 mb-4">
              <span class="font-medium">Tools:</span> {{ project.tools.join(', ') }}
            </p>
            <div class="flex justify-between items-center">
              <a :href="project.link" target="_blank"
                class="text-blue-600 font-semibold hover:text-blue-800 transition-colors duration-200">
                View Project
              </a>
              <span class="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                {{ project.category }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <!-- No Projects Message -->
      <div v-if="!filteredProjects.length" class="text-center text-gray-600 text-lg">
        No projects found for this category. Check back soon for more!
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue';

// Sample project data (replace with your store logic)
const projects = ref([
  {
    id: 1,
    name: 'E-Commerce Platform',
    description: 'A fully responsive online store with seamless checkout and product filtering.',
    tools: ['Vue.js', 'Tailwind CSS', 'Node.js'],
    image: 'https://via.placeholder.com/600x400?text=E-Commerce+Platform',
    link: 'https://example.com/ecommerce',
    category: 'Web App'
  },
  {
    id: 2,
    name: 'Portfolio Website',
    description: 'A sleek personal portfolio showcasing modern design and animations.',
    tools: ['Vue.js', 'Tailwind CSS', 'JavaScript'],
    image: 'https://via.placeholder.com/600x400?text=Portfolio+Website',
    link: 'https://example.com/portfolio',
    category: 'Portfolio'
  },
  {
    id: 3,
    name: 'Task Management Dashboard',
    description: 'An interactive dashboard for managing tasks with real-time updates.',
    tools: ['Vue.js', 'Firebase', 'Tailwind CSS'],
    image: 'https://via.placeholder.com/600x400?text=Task+Dashboard',
    link: 'https://example.com/dashboard',
    category: 'Web App'
  }
]);

// Categories for filtering
const categories = ['All', 'Web App', 'Portfolio', 'UI/UX'];
const selectedCategory = ref('All');

// Computed property for filtered projects
const filteredProjects = computed(() => {
  if (selectedCategory.value === 'All') return projects.value;
  return projects.value.filter(project => project.category === selectedCategory.value);
});

// Filter projects by category
const filterProjects = (category) => {
  selectedCategory.value = category;
};
</script>

<style scoped>
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