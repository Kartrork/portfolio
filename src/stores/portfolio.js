import { defineStore } from 'pinia';

export const usePortfolioStore = defineStore('portfolio', {
  state: () => ({
    projects: [
      { id: 1, name: 'E-commerce Site', description: 'Built a responsive online store', tools: ['Vue.js', 'Node.js'], link: '#', image: 'https://via.placeholder.com/300' },
      { id: 2, name: 'Portfolio App', description: 'Personal portfolio website', tools: ['Vue.js', 'Tailwind'], link: '#', image: 'https://via.placeholder.com/300' },
    ],
    services: [
      { name: 'Web Design', description: 'Creating visually appealing websites' },
      { name: 'Frontend Development', description: 'Building interactive UI with Vue.js' },
      { name: 'SEO', description: 'Optimizing sites for search engines' },
    ],
    testimonials: [
      { quote: 'Great work on our project!', name: 'John Doe', role: 'Client' },
      { quote: 'Rady is a skilled developer!', name: 'Jane Smith', role: 'Mentor' },
    ],
  }),
});