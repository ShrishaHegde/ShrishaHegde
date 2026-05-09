<template>
  <!-- Background Video Container -->
  <div class="fixed inset-0 overflow-hidden -z-10">
    <video
      class="absolute inset-0 w-full h-full object-cover transition-opacity duration-[10000ms]"
      autoplay
      loop
      muted>
      <source src="./assets/background_video.mp4" type="video/mp4" />
    </video>
  </div>

  <!-- Main Content Container -->
  <div>
      <MainHeader :activePage="activePage" @goToPage="scrollToPage" class="fixed  right-50 z-10 w-[40%]" />
      <PageLayoutView :activePage="activePage" @page-changed="scrollToPage" class="relative z-1"/>
  </div>
</template>

<script setup lang="ts">
import MainHeader from "./components/MainHeader.vue";
import PageLayoutView from "./views/PageLayoutView.vue";
import { ref } from "vue";

const activePage = ref('about');

const scrollToPage = (pageId: string) => {
  activePage.value = pageId;
};
</script>
