<template>
  <section class="relative">
    <bg-clouds></bg-clouds>
    <my-header />
    <div>
      <img
        class="xl:absolute hidden xl:block -right-60 -top-20 z-10"
        src="../assets/ImageForground.svg"
        alt=""
      />
    </div>
    <home-footer class="container"></home-footer>
    <bg-draw></bg-draw>
  </section>
</template>
<script setup>
import myHeader from "../components/myHeader.vue";
</script>
