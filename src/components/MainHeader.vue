<template>
  <div class="mt-20 flex justify-between">
    <button
      v-for="item in headerItems"
      :key="item.id"
      @click="scrollToPage(item.title.toLowerCase())"
      :class="['text-lg px-1 relative inline-block font-bold cursor-pointer transition-colors duration-300 hover:text-lime-300 hover-styles', 
           props.activePage === item.title.toLowerCase() ? 'item-selected' : 'text-lime-300']"
    >
      {{ item.title.toUpperCase() }}
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const emit = defineEmits(["goToPage"]);

const headerItems = ref([
  { id: 1, title: "About" },
  { id: 2, title: "Projects" },
  { id: 3, title: "Tools" },
  { id: 4, title: "Hobbies" },
  { id: 5, title: "Contact" }, 
]);

const props = defineProps({
  activePage: {
    type: String,
    required: true,
  },
});

const scrollToPage = (section: string) => {
  emit("goToPage", section);
};
</script>


<style scoped>

.item-selected {
  background-color: oklch(89.7% 0.196 126.665);
  color: #000000;
}

.hover-styles::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-top: 2px solid oklch(89.7% 0.196 126.665);
  border-bottom: 2px solid oklch(89.7% 0.196 126.665);
  transform: scaleY(2);
  opacity: 0;
  transition: 0.7s;
}

.hover-styles::after {
  content: '';
  position: absolute;
  top: 2px;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: oklch(89.7% 0.196 126.665);
  transform: scale(0);
  opacity: 0;
  transition: 0.3s;
  z-index: -1;
}

.hover-styles:hover {
  color: #000000;
}

.hover-styles:hover::before {
  transform: scaleY(1);
  opacity: 1;
}

.hover-styles:hover::after {
  transform: scaleY(1);
  opacity: 1;
}


</style>
