<template>
  <div class="z-10 relative">
    <section class="space-y-4">
      <div class="flex justify-between px-7 border-b pb-14 border-primary">
        <div class="w-2/5 text-4xl font-semibold space-y-3 relative">
          <img
            class="absolute -left-6 -top-1.5"
            src="../assets/brand.svg"
            alt=""
          />

          <img src="../assets/pseudo.svg" alt="" />
          <h4>We’ve More Then 254+ Global Partners</h4>
        </div>
        <div class="w-[43%] text-secondary font-kumbh">
          <span
            >Sed ut perspiciatis unde omnis natus error voluptatem santium
            doloremque laudantium, totam rem aperiam, eaque ipsa quae ab nllo
            inventore veritatis quasi architecto beatae vitae</span
          >
        </div>
      </div>
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
const clientIndex = ref(1);
function handleClients(sign) {
  if (sign == "+" && clientIndex.value < 4) {
    clientIndex.value++;
  } else if (sign == "-" && clientIndex.value > 1) {
    clientIndex.value--;
  }
}
</script>
