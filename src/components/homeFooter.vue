<template>
  <div class="z-10 relative lg:max-w-[1110px]">
    <section class="space-y-4">
      <div class="flex justify-between lg:gap-0 gap-4 items-center">
        <HeaderWIllustritaion
          :content="{
            text: `Weve More Then 254+ Global Partners`,
            img: 'brand',
          }"
          class="w-2/5 mb-20"
        >
        </HeaderWIllustritaion>
        <div
          class="w-[75%] text-secondary font-kumbh text-sm lg:text-base leading-8"
        >
          <span
            >Sed ut perspiciatis unde omnis natus error voluptatem santium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab nllo
            inventore veritatis quasi architecto beatae vitae</span
          >
        </div>
      </div>
      <hr class="w-[98%] mx-auto border-primary" />
      <div class="flex justify-between w-full">
        <button @click="handleClients('-')">
          <img src="../assets/Button.svg" alt="" />
        </button>
        <img
          class="lg:block hidden"
          v-for="client in 4"
          :key="client"
          :src="require(`../assets/client${client}.svg`)"
          alt=""
        />
        <img
          class="lg:hidden"
          :src="require(`../assets/client${clientIndex}.svg`)"
          alt=""
        />
        <!-- <img src="../assets/client1.svg" alt="" /><img
          class="lg:block hidden"
          src="../assets/client2.svg"
          alt=""
        /><img class="lg:block hidden" src="../assets/client3.svg" alt="" /><img
          class="lg:block hidden"
          src="../assets/client4.svg"
          alt=""
        /><img class="lg:block hidden" src="../assets/client5.svg" alt="" /> -->
        <button @click="handleClients('+')">
          <img class="rotate-180" src="../assets/Button.svg" alt="" />
        </button>
      </div>
    </section>
  </div>
</template>
<script setup>
import { ref } from "vue";
import HeaderWIllustritaion from "./HeaderWIllustritaion.vue";
const clientIndex = ref(1);
function handleClients(sign) {
  if (sign == "+" && clientIndex.value < 4) {
    clientIndex.value++;
  } else if (sign == "-" && clientIndex.value > 1) {
    clientIndex.value--;
  }
}
</script>
