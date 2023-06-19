<template>
  <div
    class="relative text-xl lg:text-[42px] font-semibold w-full leading-[53px]"
  >
    <img
      class="relative"
      :src="require(`../assets/${content.img}.svg`)"
      alt=""
    />

    <div class="absolute top-6 left-8 space-y-5 max-w-lg">
      <img src="../assets/pseudo.svg" alt="" />
      <h4>{{ content.text }}</h4>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from "vue";
defineProps(["content"]);
</script>
