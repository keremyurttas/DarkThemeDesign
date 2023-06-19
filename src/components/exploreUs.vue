<template>
  <section class="flex gap-4 mx-auto container bg-primary relative lg:-left-40">
    <img class="hidden lg:block" src="../assets/Image.svg" alt="" />
    <div>
      <HeaderWIllustritaion
        class="lg:mb-44 mb-20"
        :content="{
          text: 'Explore Our Professional Business Solutions',
          img: 'features',
        }"
      ></HeaderWIllustritaion>
      <div class="lg:grid grid-cols-2 pl-4 lg:pl-20 gap-y-20 gap-x-24">
        <div
          v-for="(feature, index) in features"
          :key="index"
          class="flex items-start gap-6"
        >
          <img :src="require(`@/assets/feature-${index + 1}.svg`)" alt="" />
          <div class="leading-7 space-y-1">
            <h5 class="lg:text-2xl font-semibold">
              {{ feature.header }}
            </h5>
            <p class="text-tertiary font-kumbh">
              Sed perspiciatis unde omnis natus error voluptatem
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script setup>
import HeaderWIllustritaion from "./HeaderWIllustritaion.vue";
const features = [
  { header: "Business Growth" },
  { header: "User Research" },
  { header: "Big Data Solution" },
  { header: "Product Design" },
];
</script>
