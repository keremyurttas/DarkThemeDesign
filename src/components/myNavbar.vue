<template>
  <header
    class="flex justify-between items-center px-4 lg:px-0 mx-auto z-10 relative"
  >
    <a href=""><img src="../assets/Logo-Lift-2022-B.png.svg" alt="" /></a>
    <ul class="lg:flex gap-10 text-white hidden">
      <button
        v-for="(button, index) in navButtons"
        :key="button"
        class="relative capitalize"
        href=""
      >
        <li
          :class="[activeIndex == index ? 'underline' : '']"
          class="flex hover:underline text-lg gap-1"
          @click="activeIndex = index"
        >
          {{ button.text }}

          <img
            v-if="button.doesExtend"
            class=""
            src="../assets/Arrow.svg"
            alt=""
          />
        </li>
      </button>
    </ul>
    <button>
      <img src="../assets/Vector(1).svg" alt="" />
    </button>
  </header>
</template>
<script setup>
import { ref } from "vue";
const activeIndex = ref(0);
const navButtons = [
  { text: "home", doesExtend: true },
  { text: "Clients", doesExtend: true },
  { text: "Services", doesExtend: true },
  { text: "Projects", doesExtend: true },
  { text: "About", doesExtend: true },
  { text: "Contact", doesExtend: false },
];
</script>
