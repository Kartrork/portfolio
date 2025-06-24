<template>
  <section class="bg-gray-50 py-12 px-6 rounded-xl shadow-lg">
    <div class="container mx-auto max-w-4xl">
      <!-- Heading -->
      <h2 class="text-4xl font-extrabold text-gray-900 mb-6 text-center tracking-tight animate-fade-in">
        About Kartrork
      </h2>
      <p class="text-xl text-gray-600 mb-10 text-center max-w-2xl mx-auto leading-relaxed">
        A passionate web developer from Cambodia, dedicated to crafting innovative and user-centric digital experiences.
      </p>

      <!-- Bio Section -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div>
          <h3 class="text-2xl font-semibold text-blue-700 mb-4">My Story</h3>
          <p class="text-gray-700 text-base leading-relaxed mb-4">
            I'm Kartrork, a web developer based in the vibrant heart of Cambodia. With a deep passion for technology and
            design, I specialize in building modern, responsive websites that prioritize user experience. My journey
            began with a curiosity for coding, sparked during my studies at the University of Cambodia, where I earned a
            BS in Computer Science.
          </p>
          <p class="text-gray-700 text-base leading-relaxed">
            Over the past 3+ years, I’ve honed my skills in frontend development, particularly with Vue.js and Tailwind
            CSS, to create seamless and visually stunning web applications. Inspired by Cambodia’s rich culture and
            dynamic tech scene, I strive to blend creativity with technical precision, delivering solutions that are
            both functional and engaging. When I’m not coding, you’ll find me exploring Phnom Penh’s bustling markets or
            contributing to open-source projects to give back to the global developer community.
          </p>
        </div>
        <div class="flex justify-center items-center">
          <div class="bg-blue-100 p-6 rounded-lg shadow-md w-full max-w-sm">
            <h4 class="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h4>
            <ul class="text-gray-700 text-base space-y-2">
              <li><span class="font-medium">Location:</span> Phnom Penh, Cambodia</li>
              <li><span class="font-medium">Education:</span> BS in Computer Science, University of Cambodia</li>
              <li><span class="font-medium">Experience:</span> 3+ years in web development</li>
              <li><span class="font-medium">Passion:</span> Building user-focused, responsive web applications</li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Skills Showcase -->
      <div class="mb-12">
        <h3 class="text-2xl font-semibold text-blue-700 mb-6 text-center">My Expertise</h3>
        <div class="flex flex-wrap justify-center gap-4">
          <span
            class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 hover:scale-105 transition-all duration-200">
            Vue.js
          </span>
          <span
            class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 hover:scale-105 transition-all duration-200">
            JavaScript
          </span>
          <span
            class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 hover:scale-105 transition-all duration-200">
            Tailwind CSS
          </span>
          <span
            class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 hover:scale-105 transition-all duration-200">
            Responsive Design
          </span>
          <span
            class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow hover:bg-blue-700 hover:scale-105 transition-all duration-200">
            UI/UX Optimization
          </span>
        </div>
      </div>

      <!-- Journey Timeline -->
      <div>
        <h3 class="text-2xl font-semibold text-blue-700 mb-6 text-center">My Journey</h3>
        <div class="space-y-6">
          <div class="flex items-start">
            <div class="bg-blue-600 w-4 h-4 rounded-full mt-1 mr-4"></div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">2019 - Started Coding</h4>
              <p class="text-gray-600">Began my coding journey at the University of Cambodia, diving into HTML, CSS, and
                JavaScript.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-blue-600 w-4 h-4 rounded-full mt-1 mr-4"></div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">2021 - Graduated with BS in Computer Science</h4>
              <p class="text-gray-600">Earned my degree and started exploring frontend frameworks like Vue.js.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-blue-600 w-4 h-4 rounded-full mt-1 mr-4"></div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">2024 - First Professional Project</h4>
              <p class="text-gray-600">Developed a responsive portfolio site for a local business, mastering Tailwind
                CSS.</p>
            </div>
          </div>
          <div class="flex items-start">
            <div class="bg-blue-600 w-4 h-4 rounded-full mt-1 mr-4"></div>
            <div>
              <h4 class="text-lg font-semibold text-gray-900">2025 - Thriving as a Web Developer</h4>
              <p class="text-gray-600">Continuing to build innovative web solutions and contributing to Cambodia’s
                growing tech community.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
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