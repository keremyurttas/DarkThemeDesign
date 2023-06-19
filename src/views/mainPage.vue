<template>
  <div class="bg-primary bg-grid h-full relative overflow-hidden">
    <my-navbar class="container mb-24"></my-navbar>
    <bg-clouds></bg-clouds>
    <home-section class="container mb-48 xl:mb-[600px]"></home-section>
    <home-footer class="container"></home-footer>
    <bg-draw></bg-draw>
  </div>
</template>
<script setup>
import myNavbar from "../components/myNavbar.vue";
import HomeSection from "../components/HomeSection.vue";
import bgClouds from "../components/bgClouds.vue";
import bgDraw from "../components/bgDraw.vue";
import homeFooter from "../components/homeFooter.vue";
</script>
