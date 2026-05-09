<template>
  <div class="flex flex-col items-center mt-10 w-[80%] mx-auto">
    <h1 class="text-5xl mt-10 text-white">MY PROJECTS</h1>
    <div class="mt-[5%] flex flex-crow items-center gap-15">
      <button class="cursor-pointer" @click="prevCard">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13" />
        </svg>
      </button>

      <div
        class="card bg-base-100 w-96 shadow-sm  animate-slide"
        v-for="project in cards"
        :key="project.id">
        <figure>
          <img :src="getImageUrl(project.imageName)" :alt="project.imageName" />
        </figure>
        <div class="card-body">
          <h2 class="card-title">{{ project.title }}</h2>
          <p>{{ project.description }}</p>
        </div>
      </div>
      <button class="cursor-pointer" @click="nextCard()">
        <svg
          class="w-6 h-6 text-gray-800 dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 8 14">
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m1 13 5.7-5.326a.909.909 0 0 0 0-1.348L1 1" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from "vue";

const projects = ref([
  {
    id: 1,
    title: "Movie Recommender",
    imageName: "sublime_cinema",
    description:
      "A web application that recommends movies based on user preferences.",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    imageName: "buy_more",
    description: "An e-commerce platform for buying various products.",
  },
  {
    id: 3,
    title: "Travel planner",
    imageName: "wanderlust",
    description:
      "A travel planning application that helps users organize their trips.",
  },
]);

// Image URL function
const getImageUrl = (name: unknown) => {
  return new URL(`../assets/images/${name}.png`, import.meta.url).href;
};

const currentCardIndex = ref(0);
const nextCard = () => {
  currentCardIndex.value = (currentCardIndex.value + 1) % projects.value.length;
};

const prevCard = () => {
  currentCardIndex.value =
    (currentCardIndex.value - 1 + projects.value.length) %
    projects.value.length;
};

const cards = computed(() => {
  const totalCards = projects.value.length;
  if (totalCards === 0) return [];
  if (totalCards === 1) return [projects.value[0]];
  if (totalCards === 2) return projects.value;
  const nextIndex = (currentCardIndex.value + 1) % totalCards;
  return [
    projects.value[currentCardIndex.value],
    projects.value[nextIndex],
  ];
});
</script>

<style scoped>
.animate-slide {
  transform: translateX(30px);
  opacity: 0;
  animation: slideIn 0.4s ease-in-out forwards;
}

@keyframes slideIn {
  from {
    transform: translateX(200px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style>
