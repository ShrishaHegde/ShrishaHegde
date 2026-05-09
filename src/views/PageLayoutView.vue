<template>
  <div class="scroll-container">
    <div class="page-layout-view" id="about">
      <AboutMe />
    </div>
    <div class="page-layout-view" id="projects">
      <MyProjects />
    </div>
    <div class="page-layout-view" id="tools">
      <ToolsPage />
    </div>
    <div class="page-layout-view" id="hobbies">
        <p class="text-3xl text-white">Hobbies</p>
    </div>
    <div class="page-layout-view" id="contact">
        <p class="text-3xl text-white">Contact</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import AboutMe from "../components/AboutMe.vue";
import MyProjects from "../components/MyProjects.vue";
import ToolsPage from "../components/ToolsPage.vue";
import { watch, onMounted, onBeforeUnmount } from "vue";
const emit = defineEmits(["pageChanged"]);

const props = defineProps(["activePage"]); // Receive activePage from parent

watch(() => props.activePage, (newPage) => {
  if (newPage !== null) {
    const element = document.getElementById(newPage);
    element?.scrollIntoView({ behavior: "smooth" });
  }
});

let observer: IntersectionObserver;

onMounted(() => {
  const sections = document.querySelectorAll(".page-layout-view");

  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("Section in view:", entry);
          const id = entry.target.id;
          emit("pageChanged", id);
        }
      });
    },
    {
      root: document.querySelector(".scroll-container"),
      threshold: 1, // Adjust based on when you consider a section to be "in view"
    }
  );

  sections.forEach((section) => observer.observe(section));
});

onBeforeUnmount(() => {
  if (observer) {
    observer.disconnect();
  }
});

</script>

<style scoped>
.scroll-container {
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  height: 100vh;
  scroll-behavior: smooth;
}
.page-layout-view {
    @apply h-screen snap-start pt-[15vh];
}
</style>
